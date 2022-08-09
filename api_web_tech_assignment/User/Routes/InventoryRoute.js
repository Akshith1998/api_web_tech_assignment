const express = require("express");
const router = express.Router();
const InventoryModal = require("../Modal/InventoryModal");

router.post("/", (req, res) => {
  InventoryModal.create({
    inventory_id: req.body.inventory_id,
    inventory_type: req.body.inventory_type,
    item_name: req.body.item_name,
    available_quantity: req.body.available_quantity,
  })
    .then((Data) => {
      res.status(200).send(Data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.get("/", (req, res) => {
  InventoryModal.find()
    .then((Data) => {
      res.status(200).send(Data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.get("/electronics", (req, res) => {
  InventoryModal.aggregate([{ $match: { inventory_type: "Electronics" } }])
    .then((Data) => {
      res.status(200).send(Data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.get("/furniture", (req, res) => {
  InventoryModal.aggregate([{ $match: { inventory_type: "Furniture" } }])
    .then((Data) => {
      res.status(200).send(Data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
