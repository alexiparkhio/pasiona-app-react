const { createCard } = require('../../services');
const { handlers: { ErrorHandler } } = require('../../shared');

module.exports = async (req, res) => {
    try {
        const { body: { title, description } } = req;
        await createCard({ title, description });
        return res.status(201).end();
    } catch (error) {
        ErrorHandler(error, res);
    }
}