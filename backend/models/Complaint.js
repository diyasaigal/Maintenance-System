const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  ticketId: {
    type: Number,
    required: true,
    unique: true
  },
  machineName: {
    type: String,
    required: true,
    trim: true
  },
  complaintDescription: {
    type: String,
    required: true,
    trim: true
  },
  priority: {
    type: String,
    required: true,
    enum: ['high', 'medium', 'low']
  },
  status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'in-progress', 'completed']
  },
  dateSubmitted: {
    type: Date,
    default: Date.now
  },
  dateUpdated: {
    type: Date,
    default: Date.now
  },
  // New field: Maintenance remarks
  maintenanceRemarks: {
    type: String,
    trim: true,
    default: ''
  }
});

// Update the dateUpdated field whenever the document is modified
complaintSchema.pre('save', function(next) {
  if (this.isModified() && !this.isNew) {
    this.dateUpdated = Date.now();
  }
  next();
});

module.exports = mongoose.model('Complaint', complaintSchema);