const encrypt = require('bcryptjs');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const UserRepository = require('../repositories/userRepository');

const userRepository = new UserRepository();
const secretKey = process.env.JWT_SECRET_KEY || 'Secret_Key';

class AuthService {
  async #encrypt(password, saltRounds) {
    const salt = await encrypt.genSalt(saltRounds);
    const hashedPassword = await encrypt.hash(password, salt);
    return hashedPassword;
  }

  async #checkPassword(userPassword, dbPassword) {
    const checkedPassword = await encrypt.compare(userPassword, dbPassword);
    return checkedPassword;
  }

  async userRegister(payload) {
    let err = null;
    let { password } = payload;
    const { username, email, confirmPassword } = payload;
    if (!username || !email || !password || !confirmPassword) {
      err = {
        message: 'Username/Email/Password/Confirm Password does not empty',
      };
      return [err, null];
    }
    const isEmail = await validator.isEmail(email);
    if (!isEmail) {
      err = { message: 'Please enter your valid email' };
      return [err, null];
    }
    if (password !== confirmPassword) {
      err = { message: 'Password does not match' };
      return [err, null];
    }
    const isStrongPassword = await validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      returnScore: false,
      pointsPerUnique: 1,
      pointsPerRepeat: 0.5,
      pointsForContainingLower: 10,
      pointsForContainingUpper: 10,
      pointsForContainingNumber: 10,
      pointsForContainingSymbol: 10,
    });
    if (!isStrongPassword) {
      err = {
        message:
          // eslint-disable-next-line max-len
          'Password is weak: must contain min. 1 letter, 1 number, 1 symbol, 1 lowercase, 1 uppercase and length more than 8 characters',
      };
      return [err, null];
    }
    password = await this.#encrypt(password, 3);
    const options = {
      where: {
        username,
        email,
      },
      defaults: { password },
    };
    const result = await userRepository.findOrCreate(options);
    return result;
  }

  async userLogin(payload) {
    let error = null;
    const { username, password } = payload;
    if (!username || !password) {
      error = 'Password/Username does not empty';
      return [error, null];
    }
    const options = {
      attributes: ['userId', 'username', 'email', 'password'],
      where: { username },
    };
    // eslint-disable-next-line prefer-const
    let [errorIsUserNotFound, isUserFound] = await userRepository.findOne(options);
    if (errorIsUserNotFound) {
      return [errorIsUserNotFound, null];
    }
    if (isUserFound) {
      const dbPassword = isUserFound.password;
      const isTruePassword = await this.#checkPassword(password, dbPassword);
      if (!isTruePassword) {
        error = {
          message: 'Password does not match',
        };
        return [error, null];
      }
    }
    try {
      const token = jwt.sign(
        {
          userId: isUserFound.userId,
        },
        secretKey,
        { expiresIn: 60 * 60 },
      );
      return [error, token];
    } catch (errorJWT) {
      errorIsUserNotFound = {
        message: 'Create JWT token is failed',
      };
      return [errorJWT, null];
    }
  }
}

module.exports = AuthService;
