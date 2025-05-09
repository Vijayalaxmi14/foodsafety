// routes/hygieneLogs.js
const express = require('express');
const HygieneLog = require('../models/HygieneLog');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const hygieneLogs = await HygieneLog.find();
        res.json(hygieneLogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
