var express = require('express')
var router = express.Router();
var Dosen = require('../models').Dosen;
var ProgramStudi = require('../models').ProgramStudi;
var Pendidikan = require('../models').Pendidikan;
var User = require('../models').User;
var Jenjang = require('../models').Jenjang;
var Jurusan = require('../models').Jurusan;

/* GET home page. */
router.get('/', function(req, res, next) {
	ProgramStudi.findAll()
		.then(function(prodis){
			res.render('prodi/index',{
					prodi:prodis
			});
		})
		.catch(function(err){
			console.log('gagal '+err)
		})
});

router.get('/add', function(req, res, next) {
  	Jenjang.findAll()
		.then(function(jjg){
			jenjang = jjg;
		});		
  	Jurusan.findAll()
  		.then(function(jsn){
  			res.render('prodi/add', {
	  			jurusan :jsn,
	  			jenjang : jenjang
  			});
  		})
		.catch(function(err){
			res.redirect('/error');
			console.log(err)
		})
});

router.post('/add', function(req, res, next){
  	ProgramStudi.create(req.body)
  		.then(function(prodi){
  			res.redirect('/prodi')
  		})
		.catch(function(err){
			res.redirect('/error');
			console.log(err)
		})
});

router.get('/edit/:id', function(req, res, next){
  	Jenjang.findAll()
		.then(function(jjg){
			jenjang = jjg;
		});
  	Jurusan.findAll()
		.then(function(jsn){
			jurusan = jsn;
		});		
  	ProgramStudi.findOne({where:{id:req.params.id}})
  		.then(function(prodi){
  			res.render('prodi/edit', {
	  			prodi : prodi,
	  			jenjang : jenjang,
	  			jurusan :jurusan
  			});
  			console.log(prodi)
  		})
		.catch(function(err){
			res.redirect('/error');
			console.log(err)
		})
});
router.put('/edit/:id', function(req, res, next){
	ProgramStudi.update(req.body, {where:{id:req.params.id}})
		.then(function(){
			res.redirect('/prodi');
		})
		.catch(function(err){
			res.redirect('/error');	
		})
})

router.delete('/delete/:id', function(req, res, next){
	ProgramStudi.destroy({where:{id:req.params.id}})
		.then(function(){
			res.redirect('/prodi')
		})
		.catch(function(){
			res.redirect('/error')
		})
});





module.exports = router;
