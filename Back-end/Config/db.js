// const mongoose = require("mongoose");
// require("dotenv").config();
// async function connectDB() {
//   try {
//     await mongoose.connect(process.env.STRING);
//     console.log("DB connected");
//   } catch (error) {
//     console.log(error);
//   }
// }
// module.exports = connectDB;
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI,);
    console.log("MongoDB Connected ");
  } catch (error) {
    console.error("MongoDB Connection Error ", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

