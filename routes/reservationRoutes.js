const express = require('express');
const { createReservation, getReservations } = require('../controllers/reservationController');
const { verifyToken, requireRole } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/create', verifyToken, createReservation);
router.get('/list', verifyToken, getReservations);

module.exports = router;