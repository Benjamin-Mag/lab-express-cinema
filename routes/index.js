const express = require("express");
const Movie = require("../models/Movie.model");
const router = express.Router();

/* GET /

This is a health check. It allows us to see that the API is running.
*/
router.get("/", (req, res, next) =>
  res.json({ success: true, name: "lab-express-cinema" })
);

router.get("/movies", async (req, res) => {
  const movies = await Movie.find().select({ title: 1, director: 1, _id: 0 });
  res.json(movies);
});

router.get("/id", async (req, res) => {
  const movies = await Movie.find().select({ title: 1, director: 1, _id: 1 });
  res.json(movies);
});

module.exports = router;
