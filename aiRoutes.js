const express = require('express');
const { getAIResponse } = require('../services/aiService');
const router = express.Router();

router.post('/chat', async (req, res) => {
    try {
        const response = await getAIResponse(req.body.message);
        res.json({ response });
    } catch (error) {
        res.status(500).json({ message: 'AI Error', error });
    }
});

module.exports = router;