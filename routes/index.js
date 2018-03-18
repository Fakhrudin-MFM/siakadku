var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Mahasiswa = require('../models').Mahasiswa;
var Dosen = require('../models').Dosen;
var ProgramStudi = require('../models').ProgramStudi;

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: null,
  database: "database_development"
});



/* GET home page. */
router.get('/', function(req, res, next) {
/*	Dosen.findAll({
			include:{
				model:ProgramStudi,
				required:true,
				attributes: [['nama_prodi', 'dodo'], ],
				raw:true
			},
			attributes: [[sequelize.fn('COUNT', sequelize.col('*')), 'hasil'], ],
			group: ['idProgramStudi'],
			raw:true,
	})
		.then(function(dosen){
			dsn = dosen;
			console.log(dosen)
			//console.log(mhs);
		})
	Mahasiswa.findAll({
			attributes: [[sequelize.fn('COUNT', sequelize.col('id')), 'hasil'], 'tahun_masuk'],
			group: ['tahun_masuk'],
			raw:true
	})
		.then(function(mhs){
			res.render('index', {
				mahasiswa:mhs,
				dosen:dsn,
			});
			//console.log(mhs);
		})
		.catch(function(err){
			console.log('gagal' + err)
		})
*/


	con.connect(function(err) {
		var dosen = "SELECT COUNT(*) as hasil, nama_prodi FROM Dosens INNER JOIN ProgramStudis ON Dosens.idProgramStudi = ProgramStudis.id GROUP BY idProgramStudi";
		con.query( dosen, function (err, dosen, fields) {
			result_dosen = dosen;	    
		});

		var mahasiswa = "SELECT COUNT(*) as hasil, tahun_masuk FROM Mahasiswas GROUP BY tahun_masuk";
		con.query(mahasiswa, function (err, mhs, fields) {
			res.render('index', {
				mahasiswa:mhs,
				dosen:result_dosen
			})
		});
	})
});




module.exports = router;
