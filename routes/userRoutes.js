const express = require('express');
const { updateUserBalance } = require('../controllers/userController');

const router = express.Router();

router.post('/update-balance', updateUserBalance);

module.exports = router;
