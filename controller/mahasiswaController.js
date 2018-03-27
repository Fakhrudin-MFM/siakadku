var Mahasiswa = require('../models').Mahasiswa;
var Dosen = require('../models').Dosen;
var ProgramStudi = require('../models').ProgramStudi;
var JalurMasuk = require('../models').JalurMasuk;
var User = require('../models').User;

module.exports = {
	index : function(req, res, next){
		Mahasiswa.findAll({
			include:[{
				model:ProgramStudi,
				required:true
			},{
				model:JalurMasuk,
				required:true
			},{
				model:Dosen,
				required:true
			}]
		})
			.then(function(mhs){
				res.render('mahasiswa/index', {mahasiswa:mhs});
				//console.log(mhs);
			})
			.catch(function(){
				console.log('gagal')
			})
	},
	indexAdd : function(req, res, next) {
	  	ProgramStudi.findAll()
	  		.then(function(prodi){
	  			ps = prodi;
	  		});
	  	Dosen.findAll()
	  		.then(function(ds){
	  			dosen = ds;
	  		});
	  	User.findAll({where:{hakakses:'Mahasiswa'}})
	  		.then(function(user){
	  			users = user;
	  		});
	  	JalurMasuk.findAll()
	  		.then(function(jalur){
	  			res.render('mahasiswa/add',{
	  				jm:jalur,
	  				ps:ps,
	  				dosen:dosen,
	  				user:users
	  			});
	  		})
	},
	add : function(req, res, next) {
		Mahasiswa.create(req.body)
			.then(function(){
				res.redirect('/mahasiswa')
			})
			.catch(function(){
				console.log('gagal')
			})
	},
	indexEdit : function(req, res, next) {
	  	ProgramStudi.findAll()
	  		.then(function(prodi){
	  			ps = prodi;
	  		});
	  	Dosen.findAll()
	  		.then(function(ds){
	  			dosen = ds;
	  		});  		
	  	JalurMasuk.findAll()
	  		.then(function(jalur){
	  			jm = jalur;
	  		});
	  	User.findAll()
	  		.then(function(user){
	  			users = user;
	  		});
		Mahasiswa.findById(req.params.id)
			.then(function(mhs){
				res.render('mahasiswa/edit', {
					mhs:mhs,
	  				jm:jm,
	  				ps:ps,
	  				dosen:dosen,
	  			//	user:users
				});
				//console.log(dosen)
			})
			.catch(function(err){
				res.redirect('/error');
				console.log('ini error bro'+err)
			})
	},
	edit: function(req, res, next){
		Mahasiswa.update(req.body, {where:{id:req.params.id}})
			.then(function(){
				res.redirect('/mahasiswa');
			})
			.catch(function(){
				res.redirect('/error');	
			})
	},
	delete:function(req, res, next){
		Mahasiswa.destroy({where:{id:req.params.id}})
			.then(function(){
				res.redirect('/mahasiswa')
			})
			.catch(function(){
				res.redirect('/error')
			})
	}
};

