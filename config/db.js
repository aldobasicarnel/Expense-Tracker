const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb://localhost:27017/transactionDB",
      {
        useNewUrlParser: true,
      }
    );
    ç;
    console.log("Database connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
