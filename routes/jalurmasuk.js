var express = require('express')
var router = express.Router();
var JalurMasuk = require('../models').JalurMasuk;

/* GET home page. */
router.get('/', function(req, res, next) {
	JalurMasuk.findAll()
		.then(function(jalur){
			res.render('jalurmasuk/index',{
					jalur:jalur
			});
		})
		.catch(function(err){
			console.log('gagal '+err)
		})
});

router.get('/add', function(req, res, next) {
	res.render('jalurmasuk/add')
});

router.post('/add', function(req, res, next){
  	JalurMasuk.create(req.body)
  		.then(function(){
  			res.redirect('/jalurmasuk')
  		})
		.catch(function(err){
			res.redirect('/error');
			console.log(err)
		})
});

router.get('/edit/:id', function(req, res, next){		
  	JalurMasuk.findOne({where:{id:req.params.id}})
  		.then(function(jalur){
  			res.render('jalurmasuk/edit', {
	  			jalur : jalur
  			});
  		})
		.catch(function(err){
			res.redirect('/error');
			console.log(err)
		})
});
router.put('/edit/:id', function(req, res, next){
	JalurMasuk.update(req.body, {where:{id:req.params.id}})
		.then(function(){
			res.redirect('/jalurmasuk');
		})
		.catch(function(err){
			res.redirect('/error');	
		})
})

router.delete('/delete/:id', function(req, res, next){
	JalurMasuk.destroy({where:{id:req.params.id}})
		.then(function(){
			res.redirect('/jalurmasuk')
		})
		.catch(function(){
			res.redirect('/error')
		})
});

module.exports = router;
