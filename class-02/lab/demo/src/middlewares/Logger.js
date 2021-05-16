module.exports = (req, res, next) => {
    console.log('request log', req.method, req.path);
    next();
};