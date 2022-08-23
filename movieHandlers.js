const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    colors: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    colors: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

const database = require("./database");
const getMovies = (req, res) => {
  database
  .query("select * from movies")
  .then(([movies]) => {
    res.json(movies);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send("Error retrieving data from database");
  });
};

const getMovieById = (req, res) => {
  const id = parseInt(req.params.id);
 
  database
    .query("select * from movies where id = ?", [id])
    .then(([movie]) => {  // movie is an array of one element
      if (movies[0] != null) {
        res.json(movie[0]);
      } else {
        res.status(404).send("Movie not found");
      }
    })
    .catch((err) => { // err is an array of one element
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
  };

//   const movie = movies.find((movie) => movie.id === id);

//   if (movie != null) {
//     res.json(movie);
//   } else {
//     res.status(404).send("Not Found"); 
//   }
// };

module.exports = {
  getMovies,
  getMovieById,
};