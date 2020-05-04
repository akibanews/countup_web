const path = require('path');
const express = require('express');
const router = express.Router();
const userController = require('../controllers/users')

router.get('/add-user', userController.getAddUser);
router.post('/add-user', userController.postAddUser); 

module.exports = router;
