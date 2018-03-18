Mahasiswa.findAll({
		attributes: [sequelize.fn('COUNT', sequelize.col('tahun_masuk')), 'tahun_masuk'],
		order: ['tahun_masuk', 'ASC'],
})
	.then(function(mhs){
		res.render('mahasiswa/index', {mahasiswa:mhs});
		//console.log(mhs);
	})
	.catch(function(){
		console.log('gagal')
	})