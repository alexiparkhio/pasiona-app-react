const { Router } = require('express');
const { createCardHandler, retrieveCardsHandler, updateCardHandler } = require('./handlers');
const { json } = require('body-parser');

const router = new Router();
const bodyParser = json();

/* API routes */
router.post('/card', bodyParser, createCardHandler);
router.get('/cards', retrieveCardsHandler);
router.patch('/card/:cardId', bodyParser, updateCardHandler);

module.exports = { router };