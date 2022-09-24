const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://admin-user:test12345@cluster0.wcs7owy.mongodb.net/transactionDB",
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
