function handle500 (err, req, res, next) {
    const error = err.message ? err.message : err;
    const error500 = {
        status: 500,
        message: error
    }
    res.status(500).json(error500);
}
module.exports = handle500;