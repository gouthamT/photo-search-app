const express = require('express');
const searchPhotos = require('./search-photos');
const cors = require('cors');
require('es6-promise').polyfill();
require('isomorphic-fetch');

const app = express(), port = 2079;

const router = express.Router();


app.use(cors())

app.use(searchPhotos.getSearchPhotosRoutes());

app.set('view engine', 'pug');

router.get('*', function (req, res, next) {
  res.render('index');
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());
app.use(express.static('build'));
app.use('/', router);

app.listen(port, () => console.log(`app is listening to port number http://localhost:${port}/`));