const Model = require('../../database/models');

const { Users } = Model;

class UserRepository {
  async findOrCreate(options) {
    let err = null;
    try {
      // eslint-disable-next-line prefer-const, no-unused-vars
      let [data, created] = await Users.findOrCreate(options);
      if (created) {
        created = {
          message: 'Your account has been created!',
        };
        return [err, created];
      }
      err = {
        message: 'The username/email is already exist!',
      };
      return [err, null];
    } catch (error) {
      err = {
        message: error.message,
      };
      return [err, null];
    }
  }

  async findOne(options) {
    let err = null;
    try {
      const data = await Users.findOne(options);
      if (data) {
        return [err, data];
      }
      err = {
        message: 'The user is not found',
      };
      return [err, null];
    } catch (error) {
      err = {
        message: error.message,
      };
      return [err, null];
    }
  }
}

module.exports = UserRepository;
