const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  title: Schema.Types.String,
  director: Schema.Types.String,
  stars: [Schema.Types.String],
  image: Schema.Types.String,
  description: Schema.Types.String,
  showtimes: [Schema.Types.String],
});
// declare the model
const Movie = model("Movie", movieSchema);

// export the model
module.exports = Movie;
