const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Please enter Your Transaction Detail"],
  },
  amount: {
    type: Number,
    required: [true, "Please enter Your Transaction Amount"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Transaction", TransactionSchema);
