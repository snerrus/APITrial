const express = require('express');
const routes = express.Router();
const indexController = require('../controllers/index');

routes.get('/post',indexController.superAdminTest);


module.exports = routes;