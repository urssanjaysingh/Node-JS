const express = require('express');
const router = express.Router();
const empoyeesController = require('../../controllers/employeesController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(empoyeesController.getAllEmployees)
    .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), empoyeesController.createNewEmployee)
    .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), empoyeesController.updateEmployee)
    .delete(verifyRoles(ROLES_LIST.Admin), empoyeesController.deleteEmployee);

router.route('/:id')
    .get(empoyeesController.getEmployee);

module.exports = router;