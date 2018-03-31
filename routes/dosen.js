var express = require('express')
var router = express.Router();
var dosenController = require('../controller/dosenController');

/* GET home page. */
router.get('/', dosenController.index);
router.get('/add', dosenController.indexAdd);
router.post('/add', dosenController.add);

router.get('/edit/:nidn', function(req, res, next){
  	ProgramStudi.findAll()
  		.then(function(prodi){
  			ps = prodi;
  		});
  	User.findAll({where:{hakakses:'Dosen'}})
		.then(function(users){
			user = users;
		});
  	Pendidikan.findAll()
		.then(function(pd){
			pendidikans = pd;
		});		
  	Dosen.findOne({where:{nidn:req.params.nidn}})
  		.then(function(ds){
  			res.render('dosen/edit', {
  				dosen:ds,
  				ps:ps,
  				pendidikan:pendidikans,
  				user:user
  			})
  		}) 		
		.catch(function(err){
			res.redirect('/error');
			console.log(err+'ini error')
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
