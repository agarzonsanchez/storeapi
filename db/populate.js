require("dotenv").config();

const connectDB = require("./mongo-db/connects");

const Product = require("./models/product");

const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

start();
