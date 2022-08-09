const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  customer_id: String,
  customer_name: String,
  email: String,
});

const CustomerModal = mongoose.model("Customer", CustomerSchema);

module.exports = CustomerModal;
