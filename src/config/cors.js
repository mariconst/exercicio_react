module.exports = function(req, res, next){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, ATH, DELETE')
    res.header('Access-Control-Allow-Headers','Origin, x-Requested-With, Content-Type, Accept')
    next()
}