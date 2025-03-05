const express = require('express');
const { addItem, getInventory } = require('../controllers/inventoryController');
const { verifyToken, requireRole } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/add', verifyToken, requireRole('admin'), addItem);
router.get('/list', verifyToken, getInventory);

module.exports = router;
