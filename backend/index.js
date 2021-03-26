const express = require("express");
const mongoose = require("mongoose");
const router = require("./router");
const cors = require("cors");
require("dotenv").config();
const app = express();
const server_port = process.env.SERVER_PORT;
const db_port = process.env.DB_PORT;

//mongoose ODM connection
mongoose
  .connect(`mongodb://localhost:${db_port}/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MONGODB"));

// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set("useFindAndModify", false);

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
var corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use("/", router);

app.listen(server_port, () =>
  console.log(` running on https://localhost:${server_port}`)
);
