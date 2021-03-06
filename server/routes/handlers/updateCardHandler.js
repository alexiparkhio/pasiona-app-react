const { updateCard } = require('../../services');
const ErrorHandler = require('./ErrorHandler');

module.exports = async (req, res) => {
    try {
        const { params: { cardId }, body: data } = req;
        await updateCard({ cardId, data });

        return res.status(204).end();
    } catch (error) {
        ErrorHandler(error, res);
    }
}