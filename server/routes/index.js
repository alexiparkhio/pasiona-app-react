const { Router } = require('express');
const { createCardHandler } = require('./handlers');
const { json } = require('body-parser');

const router = new Router();
const bodyParser = json();

/* API routes */
router.post('/card', bodyParser, createCardHandler);

module.exports = { router };