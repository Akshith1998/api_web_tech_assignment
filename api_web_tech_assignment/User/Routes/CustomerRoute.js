const express = require("express");
const router = express.Router();
const CustomerModal = require("../Modal/CustomerModal");
const ExistingUser = require("../Utility");

router.post("/", async (req, res) => {
  if (await ExistingUser(req.body.email)) {
    res.status(400).send("Email already exists");
  } else {
    CustomerModal.create({
      customer_id: req.body.customer_id,
      customer_name: req.body.customer_name,
      email: req.body.email,
    })
      .then((Data) => {
        res.status(200).send(Data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  }
});

module.exports = router;
