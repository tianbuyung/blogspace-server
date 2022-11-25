const passport = require('../lib/passport');

const requireSignIn = passport.authenticate('jwt', {
  session: false,
});

module.exports = { requireSignIn };
