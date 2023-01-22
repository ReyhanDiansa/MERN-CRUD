const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

mongoose.connect("mongodb://127.0.0.1/crud_db", { useNewUrlParser: true });

const User = mongoose.model("Users", {
  name: String,
  email: String,
  gender: String,
});

app.use(bodyParser.json());
app.use(cors());

app.post("/users", async (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
  };
  const user = new User(data);
  await user.save();
  res.send(user);
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

app.get("/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.send(user);
});

app.put("/users/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body);
  res.send("data has been update");
});

app.delete("/users/:id", async (req, res) => {
  const user = await User.findByIdAndRemove(req.params.id);
  res.send(user);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
