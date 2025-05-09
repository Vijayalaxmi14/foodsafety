// models/HygieneLog.js
const mongoose = require('mongoose');

const hygieneLogSchema = new mongoose.Schema({
    description: String,
    date: Date,
    // other fields
});

const HygieneLog = mongoose.model('HygieneLog', hygieneLogSchema);
module.exports = HygieneLog;
