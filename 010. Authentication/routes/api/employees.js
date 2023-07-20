const express = require('express');
const router = express.Router();
const empoyeesController = require('../../controllers/employeesController');

router.route('/')
    .get(empoyeesController.getAllEmployees)
    .post(empoyeesController.createNewEmployee)
    .put(empoyeesController.updateEmployee)
    .delete(empoyeesController.deleteEmployee);

router.route('/:id')
    .get(empoyeesController.getEmployee);

module.exports = router;