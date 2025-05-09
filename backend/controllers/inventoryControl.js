const Inventory = require('../models/Inventory');


exports.addInventoryItem = async (req, res) => {
  const { itemName, quantity, expiryDate } = req.body;
  try {
    const item = new Inventory({ itemName, quantity, expiryDate, addedBy: req.user._id });
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ message: 'FaAiled to add inventory item' });
  }
};

exports.getInventoryItems = async (req, res) => {
  try {
    const items = await Inventory.find().populate('addedBy', 'name role');
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch inventory items' });
  }
};