const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller')

router.post('/create', userController.createNewUser);
router.post('/login', userController.logUser);
router.get('/getAll', userController.getAllUser);



module.exports = router;
