const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  type: { type: String, enum: ['deposit', 'withdraw', 'transfer'], required: true },
  from: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  to: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  status: { type: String, enum: ['pending', 'completed', 'flagged'], default: 'completed' },
  isFlagged: { type: Boolean, default: false },
  isDeleted: { type: Boolean, default: false },
  metadata: { type: Object },
}, { timestamps: true });

module.exports = mongoose.model('Transaction', transactionSchema);
