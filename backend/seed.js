const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = require("./config/db");
const Dish = require("./models/Dish");
const dishes = require("./data/dishes.json");

const importData = async () => {
  try {
    await connectDB();

    // Remove old data
    await Dish.deleteMany();

    // Insert new data
    await Dish.insertMany(dishes);

    console.log("Data Imported Successfully ✅");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();