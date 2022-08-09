const express = require("express");
const router = express.Router();
const OrderModal = require("../Modal/OrderModal");
const InventoryModal = require("../Modal/InventoryModal");

router.post("/", (req, res) => {
  InventoryModal.find({ item_name: req.body.item_name }).then((Data) => {
    if (Data[0].available_quantity >= req.body.quantity) {
      OrderModal.create({
        customer_id: req.body.customer_id,
        inventory_id: req.body.inventory_id,
        item_name: req.body.item_name,
        quantity: req.body.quantity,
      })
        .then((order) => {
          InventoryModal.updateOne(
            {
              inventory_id: Data[0].inventory_id,
            },
            { available_quantity: Data[0].available_quantity - order.quantity }
          )
            .then(() => {
              res.status(200).send("order is placed");
            })
            .catch((err) => {
              res.status(400).send(err);
            });
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    } else {
      res.status(400).send("out of stock");
    }
  });
});

router.get("/", (req, res) => {
  const item = req.query.item;
  OrderModal.aggregate([{ $match: { item_name: item } }])
    .then((Data) => {
      let itemBought = 0;
      Data.forEach((items) => {
        itemBought += items.quantity;
      });

      res.status(200).send(`${itemBought} items are bought`);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
