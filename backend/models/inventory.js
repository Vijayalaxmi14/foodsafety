// models/Inventory.js
const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    expirationDate: Date,
    // other fields
});

const Inventory = mongoose.model('Inventory', inventorySchema);
module.exports = Inventory;
