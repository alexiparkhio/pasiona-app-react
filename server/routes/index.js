const { Router } = require('express');
const {
    createCardHandler,
    retrieveCardsHandler,
    updateCardHandler,
    deleteCardHandler
} = require('./handlers');
const { json } = require('body-parser');

const router = new Router();
const bodyParser = json();

/* API routes */
router.post('/card', bodyParser, createCardHandler);
router.get('/cards', retrieveCardsHandler);
router.patch('/card/:cardId', bodyParser, updateCardHandler);
router.delete('/card/:cardId', deleteCardHandler);

module.exports = { router };