const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema({
  inventory_id: String,
  inventory_type: String,
  item_name: String,
  available_quantity: Number,
});

const InventoryModal = mongoose.model("Inventory", InventorySchema);

module.exports = InventoryModal;
