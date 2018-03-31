// var exports = module.exports = {}

// exports.signup = function(req, res, next){
// 	res.render('signup');
// };
// exports.signin = function(req, res) {
//     res.render('signin');
// };
// exports.dashboard = function(req, res) {
//     res.render('dashboard');
// };
// exports.logout = function(req, res) {
//     req.session.destroy(function(err) {
//         res.redirect('/');
//     });
// }

module.exports = {
	signup : function(req, res, next){
		res.render('signup',{layout: false});
	},
	signin : function(req, res, next) {
    	res.render('signin',{layout: false});
	},
	dashboard : function(req, res, next) {
	    res.render('dashboard');
	},
	logout : function(req, res, next) {
	    req.session.destroy(function(err) {
	        res.redirect('/');
	    });
	}
};
