var authController = require('../controller/authcontroller');
function isLoggedIn(req, res, next) {
 
    if (req.isAuthenticated())
     
        return next();
         
    res.redirect('/signin');
 
} 
var express = require('express')
var router = express.Router();
var passport = require('passport');


router.get('/signup', authController.signup);
router.get('/signin', authController.signin);
router.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard', 
        failureRedirect: '/signup'
    }
));
router.get('/dashboard',isLoggedIn,authController.dashboard);
router.get('/logout',authController.logout);
router.post('/signin', passport.authenticate(
	'local-signin', {
    	successRedirect: '/dashboard',
    	failureRedirect: '/signin'
    }
));

module.exports = router;

// module.exports = function(app, passport) { 
//     app.get('/signup', authController.signup);
//     app.get('/signin', authController.signin);
//     app.post('/signup', passport.authenticate('local-signup', {
//             successRedirect: '/dashboard', 
//             failureRedirect: '/signup'
//         }
//     ));
//     app.get('/dashboard',isLoggedIn,authController.dashboard);
//     app.get('/logout',authController.logout);
//     app.post('/signin', passport.authenticate('local-signin', {
//         successRedirect: '/dashboard',
//         failureRedirect: '/signin'
//     }
// ));
// }