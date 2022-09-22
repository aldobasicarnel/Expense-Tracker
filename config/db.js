const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://admin-admin:test1234@transactiondb.vbswvwd.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
      }
    );
    console.log("Database connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
