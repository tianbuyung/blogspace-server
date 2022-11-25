const AuthService = require('../services/authService');

const authService = new AuthService();

class AuthController {
  async userRegister(req, res) {
    try {
      const payload = req.body;
      const [error, user] = await authService.userRegister(payload);
      if (error) {
        res.status(400).json({
          code: 400,
          status: 'BAD_REQUEST',
          errors: error,
        });
      } else {
        res.status(200).json({
          code: 200,
          status: 'OK',
          data: user,
        });
      }
    } catch (error) {
      res.status(500).json({
        code: 500,
        status: 'INTERNAL_SERVER_ERROR',
        errors: error.message,
      });
    }
  }

  async userLogin(req, res) {
    try {
      const payload = req.body;
      const [error, token] = await authService.userLogin(payload);
      if (error) {
        res.status(400).json({
          code: 400,
          status: 'BAD_REQUEST',
          errors: error,
        });
      } else {
        res.status(200).json({
          code: 200,
          status: 'OK',
          data: {
            token: `Bearer ${token}`,
          },
        });
      }
    } catch (error) {
      res.status(500).json({
        code: 500,
        status: 'INTERNAL_SERVER_ERROR',
        errors: error.message,
      });
    }
  }
}

module.exports = AuthController;
