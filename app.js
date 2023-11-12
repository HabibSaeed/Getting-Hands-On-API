const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./Model/UserSchema");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const DB_URI = `mongodb+srv://Habib_Saeed:habibsaeed123@cluster0.zxz2znr.mongodb.net/`;

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", () => {
  console.log("My Mongo Is Connected");
});
mongoose.connection.on("error", (error) => {
  console.log("Error Is Coming", error.message);
});

app.post("/api/createuser", async (req, res) => {
  try {
    const body = req.body;

    const objToSend = {
      full_name: body.fullName,
      age: body.age,
      gender: body.gender,
    };

    const data = await UserModel.create(objToSend);
    res.json({
      message: "User successfully created",
      status: true,
      data,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      message: error.message,
      status: false,
      data: null,
    });
  }
});

app.get("/", (req, res) => {
  res.json({
    message: "SERVER UP",
  });
});

app.listen(PORT, () => {
  console.log("Your Server Is Started");
});
