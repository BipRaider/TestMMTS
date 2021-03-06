'use strick';

import { connectionUsersDB } from '../../../data';

const { Sequelize, Model } = require('sequelize');

class User extends Model {}

export default User.init(
   {
      id: {
         type: Sequelize.INTEGER,
         autoIncrement: true,
         primaryKey: true,
         allowNull: false,
      },
      name: {
         type: Sequelize.STRING,
         allowNull: false,
      },
      age: {
         type: Sequelize.INTEGER,
         allowNull: false,
      },
   },
   {
      sequelize: connectionUsersDB,
      modelName: 'user',
   },
);
