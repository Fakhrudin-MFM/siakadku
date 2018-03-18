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
	Jurusan.findAll()
		.then(function(jsn){
			res.render('jurusan/index',{
					jurusan:jsn
			});
		})
		.catch(function(err){
			console.log('gagal '+err)
		})
});

router.get('/add', function(req, res, next) {
	res.render('jurusan/add')
});

router.post('/add', function(req, res, next){
  	Jurusan.create(req.body)
  		.then(function(){
  			res.redirect('/jurusan')
  		})
		.catch(function(err){
			res.redirect('/error');
			console.log(err)
		})
});

router.get('/edit/:id', function(req, res, next){		
  	Jurusan.findOne({where:{id:req.params.id}})
  		.then(function(jurusan){
  			res.render('jurusan/edit', {
	  			jurusan :jurusan
  			});
  		})
		.catch(function(err){
			res.redirect('/error');
			console.log(err)
		})
});
router.put('/edit/:id', function(req, res, next){
	Jurusan.update(req.body, {where:{id:req.params.id}})
		.then(function(){
			res.redirect('/jurusan');
		})
		.catch(function(err){
			res.redirect('/error');	
		})
})

router.delete('/delete/:id', function(req, res, next){
	Jurusan.destroy({where:{id:req.params.id}})
		.then(function(){
			res.redirect('/jurusan')
		})
		.catch(function(){
			res.redirect('/error')
		})
});

module.exports = router;
