const express = require('express');
const routes = express.Router();
const indexController = require('../controllers/index');

routes.get('/post',indexController.test);


module.exports = routes;