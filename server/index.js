const express = require('express');
const parser = require('body-parser');
const path = require('path');
const app = express();

const db = require('../db/config');

const port = 7000;

app.use(parser.urlencoded({extended:true}));
app.use(parser.json());
app.use(express.static(path.join(__dirname, '../client/static')));

app.get('/images', (req, res) => {
  db.Image.findAll({
    where: {
      car_name: req.query.name
    }
  }).then((result) => {
    res.send(result);
  }).catch((err) => {
    console.log('Error fetching ', err);
  });
});

app.post('/new', (req, res) => {
  //send image/video to s3
  db.Image.create({
    media_url: `https://s3-us-west-1.amazonaws.com/carpics25/${req.media_url}`,
    car_id: req.car_id,
    car_name: req.car_name,
    car_color: req.car_color,
    media_type: req.media_type
  }).then((result) => {
      res.send(201);
  }).catch((err) => {
      res.send(err);
  });
})



app.listen(port, () => {
  console.log('listening on PORT: ', port);
});
