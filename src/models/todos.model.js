// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const todos = sequelizeClient.define('todos', {
    todo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    info: {
      type: DataTypes.STRING,
      allowNull: false
    },
    todo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isComplete: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  todos.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    todos.belongsTo(models.tasks, {
      foreignKey: 'taskId',
      onDelete: 'CASCADE'
    });
  };

  return todos;
};
