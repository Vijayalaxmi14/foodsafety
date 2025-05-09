const HygieneLog = require('../models/HygieneLog');

exports.addHygieneLog = async (req, res) => {
  const { area, status, notes } = req.body;
  try {
    const log = new HygieneLog({ area, status, notes, checkedBy: req.user._id });
    await log.save();
    res.status(201).json(log);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add hygiene log' });
  }
};

exports.getHygieneLogs = async (req, res) => {
  try {
    const logs = await HygieneLog.find().populate('checkedBy', 'name role');
    res.json(logs);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch hygiene logs' });
  }
};