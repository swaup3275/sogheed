// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const people = sequelizeClient.define('people', {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
     api_resp_github: {
      type: Sequelize.DataTypes.JSONB,
      allowNull: false
    },
     email: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
      //unique: true
    },
    
    api_resp_stack: {
      type: Sequelize.DataTypes.JSONB,
      allowNull: false
    },
    api_resp_indeed: {
      type: Sequelize.DataTypes.JSONB,
      allowNull: false
    },
    createdAt: {
      type: Sequelize.DATE,
      field:'createdat'
    },
    updatedAt: {
      type: Sequelize.DATE,
      field:'updatedat'
    },

  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });
  

  // eslint-disable-next-line no-unused-vars
  people.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return people;
};
