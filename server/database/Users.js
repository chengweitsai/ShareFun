const Sequelize = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
}, {
  classMethods: {
    findOneuser: (username) => (
      User.findOne({
        where: { username },
      })
    ),
  },
});

User.sync().then(() => {
  // Table created
  console.log('Create user table successfully.');
}).catch((err) => {
  console.log('Create user table fail: ', err);
});

module.exports = User;