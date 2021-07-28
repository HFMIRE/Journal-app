const express = require("express");
const { User, Entries } = require("./db");
const bcyrpt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.send("hello");
});

app.post("/users", async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  const passwordHash = await bcyrpt.hash(password, 10);
  await User.create({ username, passwordHash });
  res.sendStatus(201);
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userRecord = await User.findOne({ where: { username } });
  const verfiyUser = await bcyrpt.compare(password, userRecord.passwordHash);
  if (verfiyUser) {
    const token = jwt.sign({ username, password }, process.env.JWT_SECRET);
    return res.send(token);
  } else {
    res.sendStatus(404);
  }
});
// app.post("/login", (req, res) => {
//   const { username, password } = req.body;
//   res.send(username, password);
// });
// // verify the JWT
// app.get("/login", (req, res) => {
//   const authHeader = req.headers.authorization;
//   const token = authHeader.split(" ")[1];
//   const tokenVerify = jwt.verify(token, process.env.JWT_SECRET);
//   const { username } = tokenVerify;
//   res.send(`Hello, ${username}`);
// });

app.get("/users/:userid", async (req, res) => {
  const userId = req.params.userid;
  const findByUserId = await User.findByPk(userId);
  res.send(findByUserId);
});

app.delete("/users/:userid", async (req, res) => {
  const userId = req.params.userid;
  const userToDelete = await User.findByPk(userId);
  try {
    await userToDelete.destroy();
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});
// entries
app.post("/users/:userid/entries", async (req, res) => {
  const UserId = req.params.userid;
  const { name, description } = req.body;
  console.log(name, description);
  await Entries.create({ name, description, UserId });
  res.sendStatus(201);
});

app.get("/users/:userid/entries/:entriesid", async (req, res) => {
  const EntriesId = req.params.entriesid;
  const findByEntriesId = await Entries.findByPk(EntriesId);
  res.send(findByEntriesId);
});

app.put("/users/:userid/entries/:entriesid", async (req, res) => {
  const { name, description } = req.body;
  const EntriesId = req.params.entriesid;
  const findByEntriesId = await Entries.findByPk(EntriesId);
  try {
    await findByEntriesId.update({ name, description });
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});
app.delete("/users/:userid/entries/:entriesid", async (req, res) => {
  const EntriesId = req.params.entriesid;
  const entriesToDelete = await Entries.findByPk(EntriesId);
  console.log(EntriesId, entriesToDelete);
  try {
    await entriesToDelete.destroy();
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
