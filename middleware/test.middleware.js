const middleware = {};

middleware.test = async function(req, res, next){
    next();
}

module.exports = middleware;