// REQUIMENTS
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const colors = require("colors");
const logger = require("morgan");
const connectDB = require("./models/db");
const path = require("path");

const app = express();
connectDB();

// ROUTES
const transactionsRoutes = require("./routes/transaction");

// MIDDLEWARES
app.use(express.json());
app.use(logger("dev"));
app.use(cors());
app.use(helmet());

// UNMOUNTING ROUTES
app.get("/", (req, res) => res.send("Hello Expense Trackers"));
app.use("/api/v1/transactions", transactionsRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

// LISTENERS
app.listen(process.env.PORT, () =>
  console.log(
    `Server has Started in ${process.env.NODE_ENV} mode on http://localhost:${process.env.PORT}`
      .blue.bold
  )
);
