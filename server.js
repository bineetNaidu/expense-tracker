// REQUIMENTS
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const colors = require("colors");
const logger = require("morgan");

const app = express();

// MIDDLEWARES
app.use(logger("dev"));
app.use(cors());
app.use(helmet());

// UNMOUNTING ROUTES
app.get("/", (req, res) => res.send("Hello Expense Trackers"));

// LISTENERS
app.listen(process.env.PORT, () =>
  console.log(
    `Server has Started in ${process.env.NODE_ENV} mode on http://localhost:${process.env.PORT}`
      .yellow.bold
  )
);
