const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");

dotenv.config({ path: "/config/config.env" });

const transactions = require("./routes/transactions");

const app = express();

app.use("/api/v1/transactions", transactions);

const PORT = process.env.PORT || 7006;

app.listen(PORT, function (req, res) {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});
