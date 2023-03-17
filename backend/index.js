require("dotenv").config();
const express = require("express");
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));
app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  console.log(req.path, req.method);
  next();
});
// Create a schema for our data
const attSchema = new mongoose.Schema({
  Course: String,
  Conducted: Number,
  Attended: Number,
  Attendance: Number,
});
const myDataSchema = new mongoose.Schema({
  _id: ObjectId,
  att: [attSchema],
});

// Create a model for our data
const MyData = mongoose.model("attendace", myDataSchema);

// Route to fetch all data
app.get("/data", async (req, res) => {
  try {
    const data = await MyData.find();
    res.json(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Start the server

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));

