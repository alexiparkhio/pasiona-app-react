const { retrieveCards } = require('../../services');
const { handlers: { ErrorHandler } } = require('../../shared');

module.exports = async (req, res) => {
    try {
        const cards = await retrieveCards();
        return res.status(200).json(cards);
    } catch (error) {
        ErrorHandler(error, res);
    }
}