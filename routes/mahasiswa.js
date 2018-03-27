var express = require('express')
var router = express.Router();
var mahasiswaController = require('../controller/mahasiswaController');

router.get('/', mahasiswaController.index);
router.get('/add', mahasiswaController.indexAdd);
router.post('/add', mahasiswaController.add);
router.get('/edit/:id', mahasiswaController.indexEdit);
router.put('/edit/:id', mahasiswaController.edit)
router.delete('/delete/:id', mahasiswaController.delete);

module.exports = router;
