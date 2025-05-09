// allergenRoutes.js
const express = require('express');
const router = express.Router();

// Import the addAllergen function from allergenController.js
const { addAllergen } = require('../controllers/allergenController');
const protect = require('../middleware/authMiddleware');

// Define the POST route to add an allergen
router.post('/', protect, addAllergen);

module.exports = router;
