module.exports = function(req, res, next) {
    res.header('Acess-Control-Allow-origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE')
    res.header('Acess-COntrol-Allow-Headres', 'Origin, X-Requested-With,Content-Type, Accept')
    next()
}