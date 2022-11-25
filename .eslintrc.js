module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  ignorePatterns: ['bin/*'],
  rules: {
    'max-len': [2, 100],
    'class-methods-use-this': 0,
    'object-curly-newline': 0,
  },
};
