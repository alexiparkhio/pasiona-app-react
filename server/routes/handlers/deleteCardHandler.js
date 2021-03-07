const { deleteCard } = require('../../services');
const { handlers: { ErrorHandler } } = require('../../shared');

module.exports = async (req, res) => {
    try {
        const { params: { cardId } } = req;
        await deleteCard({ cardId });
        return res.status(200).end();
    } catch (error) {
        ErrorHandler(error, res);
    }
}