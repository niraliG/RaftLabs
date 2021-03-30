const express = require("express");
const mongoose = require("mongoose");
const router = require("./router");
const cors = require("cors");
require("dotenv").config();
const app = express();
const server_port = process.env.SERVER_PORT;
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://nirali:nirali9456@cluster0.9tjjk.mongodb.net/people?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("Connected to MONGODB"));

var corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use("/", router);

app.listen(server_port, () =>
  console.log(` running on https://localhost:${server_port}`)
);
