const mongoose = require("mongoose");

const itemsSchema = {
  text: String,
  amount: Number,
  date: Date,
};

const Item = mongoose.model("Item", itemsSchema);

module.exports = Item;
