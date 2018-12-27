var express = require('express');
var router = express.Router();

var employee = require('../controllers/EmployeeController.js');

router.get('/', employee.getList);

router.get('/:id', employee.getDetail);

router.post('/', employee.create);

router.put('/:id', employee.update);

router.delete('/:id', employee.delete);

module.exports = router;