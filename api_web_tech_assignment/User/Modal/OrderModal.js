const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  customer_id: String,
  inventory_id: String,
  item_name: String,
  quantity: Number,
});

const OrderModal = mongoose.model("Order", OrderSchema);

module.exports = OrderModal;
