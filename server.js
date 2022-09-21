const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./config/db");

dotenv.config({ path: "/config/config.env" });

connectDB();

const transactions = require("./routes/transactions");

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/transactions", transactions);

const PORT = process.env.PORT || 7006;

let port = process.env.PORT;
if (port == null || port == "") {
  port = PORT;
}

app.listen(PORT, function (req, res) {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});
