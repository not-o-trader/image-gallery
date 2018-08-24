const Sequelize = require('sequelize');

const { seed } = require('../../data.js');

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

Image.sync({ force: true })
  .then(() => {
    Image.bulkCreate(seed)
    console.log('successfully synced images')
  })
  .catch(err => console.log('error syncing database ', err));


module.exports = {
  db,
  Image
}