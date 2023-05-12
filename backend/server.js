const express = require("express");
const fs = require("fs");
const cors = require("cors"); // Import the CORS package
const app = express();
const port = 5000;

app.use(cors()); // Add this line to use CORS middleware

// Read the data from the JSON file
let data = fs.readFileSync("db.json");
let db = JSON.parse(data);

// Route to get all cars
app.get("/cars", (req, res) => {
  res.json(db.cars);
});

// Route to get a single car by id
app.get("/cars/:id", (req, res) => {
  let carId = Number(req.params.id);
  let car = db.cars.find((car) => car.id === carId);
  if (!car) {
    res.status(404).send("Car not found");
  } else {
    res.json(car);
  }
});

// Route to get all parts
app.get("/parts", (req, res) => {
  res.json(db.parts);
});

// Route to get a single part by id
app.get("/parts/:id", (req, res) => {
  let partId = Number(req.params.id);
  let part = db.parts.find((part) => part.id === partId);
  if (!part) {
    res.status(404).send("Part not found");
  } else {
    res.json(part);
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
