function handle404(req, res, next) {

    const error404 = {
        status: 404,
        message: 'PAGE NOT FOUND!'
    }

    res.status(404).json(error404);
}

module.exports = handle404;