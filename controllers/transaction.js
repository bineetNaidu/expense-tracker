const Transaction = require("../models/Transaction");

module.exports = {
  // @desc GET all transactions
  // @route GET /api/v1/transactions
  // @access PUBLIC
  getTransactions: async (req, res, next) => {
    try {
      const transactions = await Transaction.find();
      res.status(200).json({
        success: true,
        count: transactions.length,
        data: transactions,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  },

  // @desc ADD transactions
  // @route POST /api/v1/transactions
  // @access PUBLIC
  addTransactions: async (req, res, next) => {
    try {
      const transaction = await Transaction.create(req.body);

      return res.status(201).json({
        success: true,
        data: transaction,
      });
    } catch (err) {
      if (err.name === "ValidationError") {
        const messages = Object.values(err.errors).map((val) => val.message);

        return res.status(400).json({
          success: false,
          error: messages,
        });
      } else {
        return res.status(500).json({
          success: false,
          error: "Server Error",
        });
      }
    }
  },

  // @desc DELETE transactions
  // @route DELETE /api/v1/transactions/:id
  // @access PUBLIC
  deleteTransactions: async (req, res, next) => {
    try {
      const transaction = await Transaction.findOne({ _id: req.params.id });

      if (!transaction) {
        return res.status(404).json({
          success: false,
          error: "No Transaction Found!",
        });
      }

      await transaction.remove();
      return res.status(200).json({
        success: true,
        data: {},
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
    res.send("DELETE TRANSACTIONS");
  },
};
