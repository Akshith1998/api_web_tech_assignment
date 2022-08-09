const express = require("express");
const app = express();
const mongoose = require("mongoose");
const CustomerController = require("./User/Routes/CustomerRoute");
const OrderController = require("./User/Routes/OrderRoute");
const InventoryController = require("./User/Routes/InventoryRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect("mongodb://127.0.0.1:27017/api_web_tech_assignment")
  .then(() => {
    console.log(`Database is connected`);
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/customer", CustomerController);
app.use("/inventory", InventoryController);
app.use("/order", OrderController);

app.listen(3002, (err) => {
  if (!err) {
    console.log("server is running at port 3002");
  } else {
    console.log(err);
  }
});
