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

module.exports = {
  db
}