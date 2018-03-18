var express = require('express');
var router = express.Router();
var User = require('../models').User;
var UserGroup = require('../models').UserGroup;
var formidable = require('formidable');
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.findAll()
  	.then(function(users){
  		res.render(
  			'users/index',{
  				user:users
  			}
  		);
  	})
  	.catch();
});

router.get('/detail/:id', function(req, res, next) {
  User.findById(req.params.id)
  	.then(function(users){
  		res.render(
  			'users/detail',{
  				user:users
  			}
  		);
  	})
  	.catch();
});

router.post('/upload-foto-profil/:id',function(req, res, next){
	var form = new formidable.IncomingForm();

	form.parse(req, function(err, fields, files){
		if(err){
			console.log(err);
		}else{
			var tmpPath = files.foto.path;
			var uploadPath = './public/uploads/'+files.foto.name;

			fs.rename(tmpPath, uploadPath, function(err){
				if(err){
					console.log(err);
				}

				User.findById(req.params.id)
					.then(function(myuser){
						console.log('ini adalah'+myuser);
						console.log('kalau ini'+files.foto.name)
						myuser.foto = files.foto.name;
						myuser.save();
					});

				res.redirect('/users/detail/'+req.params.id);

				fs.unlink(tmpPath, function(){
					if(err){
						console.log(err)
					};
				})
			})
		}
	});
});

router.get('/add', function(req, res, next){
  UserGroup.findAll()
  	.then(function(usergroup){
		res.render('users/add', {
			ug:usergroup
		})
  	})
  	.catch(function(err){
  		console.log(err);
  	});
});

router.post('/add', function(req, res, next){
	User.create(req.body)
		.then(function(){
			res.redirect('/users')
		})
		.catch(function(err){
			console.log('gagal karena ' + err)
		})
});

router.get('/edit/:username', function(req, res, next){
  UserGroup.findAll()
  	.then(function(usergroup){
		ug = usergroup;
  	});
  User.findOne({where:{username : req.params.username}})
  	.then(function(users){
		res.render('users/edit', {
			user:users,
			ug:ug,
		})
		console.log(user)
  	})
  	.catch(function(err){
  		console.log(err);
  	});
});

router.put('/edit/:username', function(req, res, next){
	User.update(req.body, {where:{username:req.params.username}})
		.then(function(){
			res.redirect('/users');
		})
		.catch(function(){
			res.redirect('/error');	
		})	
});


module.exports = router;
