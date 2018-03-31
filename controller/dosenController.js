var Dosen = require('../models').Dosen;
var ProgramStudi = require('../models').ProgramStudi;
var Pendidikan = require('../models').Pendidikan;
var User = require('../models').User;

module.exports = {
	index : function(req, res, next){
		Dosen.findAll()
			.then(function(dosens){
				res.render('dosen/index',{
						dosen:dosens
				});
			})
			.catch(function(err){
				console.log('gagal '+err)
			})
	},
	indexAdd : function(req, res, next) {
	  	ProgramStudi.findAll()
	  		.then(function(prodi){
	  			ps = prodi;
	  		});
	  	Pendidikan.findAll()
	  		.then(function(pd){
	  			pend = pd;
	  		});  		
	  	User.findAll({where:{hakakses:'Dosen'}})
	  		.then(function(user){
	  			res.render('dosen/add',{
	  				ps:ps,
	  				user:user,
	  				pendidikan:pend
	  			});
	  		});
	},
	add : function(req, res, next) {
		Dosen.create(req.body)
			.then(function(){
				res.redirect('/dosen')
			})
			.catch(function(err){
				console.log('gagal karena '+err)
			})
	},
	indexEdit : function(req, res, next) {

	},
	edit: function(req, res, next){
	},
	delete:function(req, res, next){
	}
};

