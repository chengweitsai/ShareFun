const Sequelize = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  classMethods: {
    findOneuser: (name) => (
      User.findOne({
        where: { username: name },
      })
    ),
  },
});

const Group = sequelize.define('group', {
  groupName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  classMethods: {
    findOneGroup: (groupName) => (
      Group.findOne({
        where: { groupName },
      })
    ),
  },
});

const UserGroup = sequelize.define('usergroup', {
  // id: {
  //  type: Sequelize.INTEGER,
  //  primaryKey: true,
  // },
});

Group.belongsToMany(User, {
  through: {
    model: UserGroup,
    unique: false,
  },
  constraints: false,
  foreignKey: 'group_id',
});

User.belongsToMany(Group, {
  through: {
    model: UserGroup,
    unique: false,
  },
  constraints: false,
  foreignKey: 'user_id',
});

User.sync().then(() => {
  // Table created
  console.log('Create user table successfully.');
}).catch((err) => {
  console.log('Create user table fail: ', err);
});

User.create({
  username: 'admin',
  password: 'admin',
});

Group.sync().then(() => {
  // Table created
  console.log('Create group table successfully.');
}).catch((err) => {
  console.log('Create group table fail: ', err);
});

UserGroup.sync().then(() => {
  console.log('Create UserGroup table successfully.');
}).catch((err) => {
  console.log('Create UserGroup table fail: ', err);
});

module.exports = { User, Group };
