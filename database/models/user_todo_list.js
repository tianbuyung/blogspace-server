const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserTodoLists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.UserTodoLists.belongsTo(models.Users, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  UserTodoLists.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        unique: true,
      },
      userId: {
        allowNull: false,
        type: DataTypes.UUID,
        unique: true,
        field: 'user_id',
      },
      todo: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date().getTime(),
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: new Date().getTime(),
        field: 'updated_at',
      },
    },
    {
      sequelize,
      modelName: 'UserTodoLists',
      tableName: 'user_todo_lists',
      paranoid: true,
    },
  );
  return UserTodoLists;
};
