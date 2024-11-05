require("dotenv").config();
require("express-async-errors");
// async errors

const express = require("express");
const app = express();
const connectDB = require("./mongo-db/connects");
const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");
const productsRouter = require("./routes/products");

//middleware

app.use(express.json());

//routes

app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">Products Route</a>');
});

app.use("/api/v1/products", productsRouter);
//Products route
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3001;
const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Server is listening port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
