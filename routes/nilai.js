var express = require('express')
var router = express.Router();
var Mahasiswa = require('../models').Mahasiswa;
var Dosen = require('../models').Dosen;
var Nilai = require('../models').Nilai;
var MataKuliah = require('../models').MataKuliah;

/* GET home page. */
router.get('/', function(req, res, next) {
	Nilai.findAll({
		include:[{
			model:Mahasiswa,
			required:true
		},{
			model:Dosen,
			required:true
		},{
			model:MataKuliah,
			required:true
		}]
	})
		.then(function(nilai){
			res.render('nilai/index', {
				nilai:nilai
			});
			//console.log(mhs);
		})
		.catch(function(){
			console.log('gagal')
		})
});

router.get('/add', function(req, res, next) {
  	MataKuliah.findAll()
  		.then(function(matkul){
  			matkuls = matkul;
  		});
  	Dosen.findAll()
  		.then(function(ds){
  			dosen = ds;
  		});
  	Mahasiswa.findAll()
  		.then(function(mhs){
  			mhsw = mhs;
  		});
  	Nilai.findAll()
  		.then(function(nilai){
  			res.render('nilai/add',{
  				nilai:nilai,
  				matkul:matkuls,
  				dosen:dosen,
  				mhs:mhsw
  			});
  		})
});

router.post('/add', function(req, res, next){
	Nilai.create(req.body)
		.then(function(){
			res.redirect('/nilai')
		})
		.catch(function(){
			console.log('gagal')
		})
});

router.get('/edit/:id', function(req, res, next){
  	MataKuliah.findAll()
  		.then(function(matkul){
  			matkuls = matkul;
  		});
  	Dosen.findAll()
  		.then(function(ds){
  			dosen = ds;
  		});
  	Mahasiswa.findAll()
  		.then(function(mhs){
  			mhsw = mhs;
  		});
  	Nilai.findById(req.params.id)
  		.then(function(nilai){
  			res.render('nilai/edit',{
  				nilai:nilai,
  				matkul:matkuls,
  				dosen:dosen,
  				mhs:mhsw
  			});
  		})
});

router.put('/edit/:id', function(req, res, next){
	Nilai.update(req.body, {where:{id:req.params.id}})
		.then(function(){
			res.redirect('/nilai');
		})
		.catch(function(){
			res.redirect('/error');	
		})
})

router.delete('/delete/:id', function(req, res, next){
	Nilai.destroy({where:{id:req.params.id}})
		.then(function(){
			res.redirect('/nilai')
		})
		.catch(function(){
			res.redirect('/error')
		})
});


module.exports = router;
