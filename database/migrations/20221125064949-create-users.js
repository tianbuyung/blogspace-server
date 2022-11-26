/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        unique: true,
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
        notNull: {
          msg: 'Please enter your valid username',
        },
        unique: true,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        notNull: {
          msg: 'Please enter your valid email',
        },
        validate: {
          isEmail: true,
        },
        unique: true,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(60),
        notNull: {
          msg: 'Please enter your valid password',
        },
        validate: {
          is: /^\$2[ayb]\$.{56}$/i,
        },
      },
      deleted_at: {
        type: Sequelize.DATE,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  // eslint-disable-next-line no-unused-vars
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  },
};
