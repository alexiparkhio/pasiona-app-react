const { NotAllowedError, NotFoundError, ContentError } = require('../errors');

module.exports = (error, res) => {
    let status = 400

    if (error instanceof NotAllowedError)
        status = 409 // conflict

    if (error instanceof NotFoundError)
        status = 404 // not found

    if (error instanceof TypeError || error instanceof ContentError)
        status = 406 // not acceptable

    const { message } = error

    res
        .status(status)
        .json({
            error: message
        })
}