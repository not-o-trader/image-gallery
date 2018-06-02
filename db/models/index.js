// const Sequelize = require('sequelize');
// const { db } = require('../config');

// const Image = db.define('images', {
//   id: { 
//     type: Sequelize.INTEGER,
//     primaryKey: true
//   },
//   image_url: Sequelize.STRING,
//   car_id: Sequelize.INTEGER,
//   car_name: Sequelize.STRING,
//   car_color: Sequelize.STRING
// }, {timestamps: false})

// db.sync({ force: false })
//   .then(() => console.log('successfully synced database'))
//   .catch(err => console.log('error syncing database ', err));

// module.exports = {
//   Image
// }