const mongoose = require('mongoose');  // Ensure mongoose is imported

// Define the Allergen schema
const allergenSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,  // Making the field required
  },
  description: {
    type: String,
    required: true,  // Making the field required
  },
  createdAt: {
    type: Date,
    default: Date.now,  // Default value to current timestamp
  },
});

// Check if the model already exists to prevent overwriting
const Allergen = mongoose.models.Allergen || mongoose.model('Allergen', allergenSchema);

module.exports = Allergen;
