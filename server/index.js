const express = require('express');
const parser = require('body-parser');
const path = require('path');
const app = express();

const db = require('../db/config');

const port = 3000;

app.use(parser.urlencoded({extended:true}));
app.use(parser.json());
app.use(express.static(path.join(__dirname, '../client/static')));

app.listen(port, () => {
  console.log('listening on PORT: ', port);
});
