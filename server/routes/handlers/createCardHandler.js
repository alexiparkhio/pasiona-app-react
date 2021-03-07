const { createCard } = require('../../services');
const ErrorHandler = require('./ErrorHandler');

module.exports = async (req, res) => {
    try {
        const { body: { title, description } } = req;
        await createCard({ title, description });
        return res.status(201).end();
    } catch (error) {
        ErrorHandler(error, res);
    }
}