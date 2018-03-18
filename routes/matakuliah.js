var express = require('express')
var router = express.Router();
var MataKuliah = require('../models').MataKuliah;

/* GET home page. */
router.get('/', function(req, res, next) {
	MataKuliah.findAll()
		.then(function(matkul){
			res.render('matakuliah/index',{
					matkul:matkul
			});
		})
		.catch(function(err){
			console.log('gagal '+err)
		})
});

router.get('/add', function(req, res, next) {
	res.render('matakuliah/add')
});

router.post('/add', function(req, res, next){
  	MataKuliah.create(req.body)
  		.then(function(){
  			res.redirect('/matakuliah')
  		})
		.catch(function(err){
			res.redirect('/error');
			console.log(err)
		})
});

router.get('/edit/:id', function(req, res, next){		
  	MataKuliah.findOne({where:{id:req.params.id}})
  		.then(function(matkul){
  			res.render('matakuliah/edit', {
	  			matkul : matkul
  			});
  		})
		.catch(function(err){
			res.redirect('/error');
			console.log(err)
		})
});
router.put('/edit/:id', function(req, res, next){
	MataKuliah.update(req.body, {where:{id:req.params.id}})
		.then(function(){
			res.redirect('/matakuliah');
		})
		.catch(function(err){
			res.redirect('/error');	
		})
})

router.delete('/delete/:id', function(req, res, next){
	MataKuliah.destroy({where:{id:req.params.id}})
		.then(function(){
			res.redirect('/matakuliah')
		})
		.catch(function(){
			res.redirect('/error')
		})
});

module.exports = router;
