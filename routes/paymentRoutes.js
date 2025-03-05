const express = require('express');
const { processPayment } = require('../controllers/paymentController');
const { verifyToken } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/pay', verifyToken, processPayment);

module.exports = router;