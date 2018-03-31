var authController = require('../controller/authcontroller');
exports.isLoggedIn = function(req, res, next) {
    if (req.isAuthenticated())
        return next();         
    res.redirect('/signin'); 
};