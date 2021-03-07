const { retrieveCards } = require('../../services');
const ErrorHandler = require('./ErrorHandler');

module.exports = async (req, res) => {
    try {
        const cards = await retrieveCards();
        return res.status(200).json(cards);
    } catch (error) {
        ErrorHandler(error, res);
    }
}