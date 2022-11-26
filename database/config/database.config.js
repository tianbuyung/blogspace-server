require('dotenv').config();

// eslint-disable-next-line object-curly-newline
const { DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_HOST, DATABASE_NAME } = process.env;

module.exports = {
  development: {
    username: DATABASE_USERNAME || 'postgres',
    password: DATABASE_PASSWORD || 'admin',
    database: DATABASE_NAME || 'blogspace_dev',
    host: DATABASE_HOST,
    dialect: 'postgres',
  },
  test: {
    username: DATABASE_USERNAME || 'postgres',
    password: DATABASE_PASSWORD || 'admin',
    database: DATABASE_NAME || 'blogspace_test',
    host: DATABASE_HOST,
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
