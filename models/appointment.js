const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  time: { type: String, required: true },
  // Add other fields as needed
});

const appointment = mongoose.model('appointment', appointmentSchema);

module.exports = appointment;