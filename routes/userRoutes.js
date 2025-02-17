const express = require('express');
const { updateUserBalance } = require('../controllers/userController');
const validateInput = require('../middlewares/validateInput');

const router = express.Router();

router.post('/update-balance', validateInput, updateUserBalance);

module.exports = router;
