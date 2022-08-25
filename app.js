require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

const port = process.env.APP_PORT ?? 5000;

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

app.get("/", welcome);

const movieHandlers = require("./movieHandlers");

app.get("/api/movies", movieHandlers.getMovies);
app.post("/api/movies", movieHandlers.postMovie);
app.get("/api/movies/:id", movieHandlers.getMovieById);
app.put("/api/movies/:id", movieHandlers.updateMovie);
app.delete("/api/movies/:id", movieHandlers.deleteMovie);

const { validateUser } = require("./validators.js");
const userHandlers = require("./userHandlers");
app.get("/api/users", userHandlers.getUsers);
app.post("/api/users", validateUser, userHandlers.postUser);
// app.post("/api/users", userHandlers.postUser);
app.get("/api/users/:id", userHandlers.getUserById);
// app.put("/api/users/:id", userHandlers.updateUser);
app.put("/api/users/:id", validateUser, userHandlers.updateUser);
app.delete("/api/users/:id", userHandlers.deleteUser);

const { validateMovie } = require("./validators.js");
app.post("/api/movies", validateMovie, movieHandlers.postMovie);
app.put("/api/movies/:id", validateMovie, movieHandlers.updateMovie);


app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
// {
//   "id": 5,
//    "firstname": "Jane",
//   "lastname": "Doe",
//   "email": "jane.doe@example.com",
//   "city": "London",
//   "language": "English"

// }