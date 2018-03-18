var express = require('express')
var router = express.Router();
var Dosen = require('../models').Dosen;
var ProgramStudi = require('../models').ProgramStudi;
var Pendidikan = require('../models').Pendidikan;
var User = require('../models').User;

/* GET home page. */
router.get('/', function(req, res, next) {
	Dosen.findAll()
		.then(function(dosens){
			res.render('dosen/index',{
					dosen:dosens
			});
		})
		.catch(function(err){
			console.log('gagal '+err)
		})
});

router.get('/add', function(req, res, next) {
  	ProgramStudi.findAll()
  		.then(function(prodi){
  			ps = prodi;
  		});
  	Pendidikan.findAll()
  		.then(function(pd){
  			pend = pd;
  		});  		
  	User.findAll({where:{idUserGroup:2}})
  		.then(function(user){
  			res.render('dosen/add',{
  				ps:ps,
  				user:user,
  				pendidikan:pend
  			});
  		});
});

router.post('/add', function(req, res, next){
	Dosen.create(req.body)
		.then(function(){
			res.redirect('/dosen')
		})
		.catch(function(err){
			console.log('gagal karena '+err)
		})
});

router.get('/edit/:nidn', function(req, res, next){
  	ProgramStudi.findAll()
  		.then(function(prodi){
  			ps = prodi;
  		});
  	User.findAll({where:{idUserGroup:2}})
		.then(function(users){
			user = users;
		});
  	Pendidikan.findAll()
		.then(function(pd){
			pendidikan = pd;
		});		
  	Dosen.findOne({where:{nidn:req.params.nidn}})
  		.then(function(ds){
  			res.render('dosen/edit', {
  				dosen:ds,
  				ps:ps,
  				pendidikan:pendidikan,
  				user:user
  			})
  		}) 		
		.catch(function(err){
			res.redirect('/error');
			console.log(err)
		})
});
router.put('/edit/:nidn', function(req, res, next){
	Dosen.update(req.body, {where:{nidn:req.params.nidn}})
		.then(function(){
			res.redirect('/dosen');
		})
		.catch(function(err){
			console.log(err);
			res.redirect('/error');	
		})
})

router.delete('/delete/:nidn', function(req, res, next){
	Dosen.destroy({where:{id:req.params.nidn}})
		.then(function(){
			res.redirect('/dosen')
		})
		.catch(function(){
			res.redirect('/error')
		})
});





module.exports = router;
