const Sequelize = require('sequelize');

const db = new Sequelize('autotrader', 'jacobmetzinger', '', {
  host: 'localhost',
  dialect: 'postgres',
});

db.authenticate()
  .then(() => {
    console.log('Succesfully connected to database');
  })
  .catch((err) => {
    console.error('Unable to connect to database', err);
  });

const Image = db.define('images', {
  id: { 
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  media_url: Sequelize.STRING,
  car_id: Sequelize.INTEGER,
  car_name: Sequelize.STRING,
  car_color: Sequelize.STRING,
  media_type: Sequelize.STRING
}, {timestamps: false})

db.sync({ force: false })
  .then(() => console.log('successfully synced database'))
  .catch(err => console.log('error syncing database ', err));


module.exports = {
  db,
  Image
}