// routes/inventory.js
const express = require('express');
const Inventory = require('../models/Inventory');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const inventoryItems = await Inventory.find();
        res.json(inventoryItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
