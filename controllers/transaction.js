module.exports = {
  // @desc GET all transactions
  // @route GET /api/v1/transactions
  // @access PUBLIC
  getTransactions: async (req, res, next) => {
    res.send("GET ALL TRANSACTIONS");
  },

  // @desc ADD transactions
  // @route POST /api/v1/transactions
  // @access PUBLIC
  addTransactions: async (req, res, next) => {
    res.send("ADD TRANSACTIONS");
  },

  // @desc DELETE transactions
  // @route DELETE /api/v1/transactions/:id
  // @access PUBLIC
  deleteTransactions: async (req, res, next) => {
    res.send("DELETE TRANSACTIONS");
  },
};
