import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL: "https://m.media-amazon.com/images/I/91pDsT8DIlL._AC_SY679_.jpg",
      rating: 9.0,
    },
    {
      title: "Interstellar",
      description: "A space exploration film that explores love and time.",
      posterURL: "https://m.media-amazon.com/images/I/71n1Rkh2SML._AC_SY679_.jpg",
      rating: 8.6,
    },
    {
      title: "The Dark Knight",
      description: "A superhero film featuring Batman vs. The Joker.",
      posterURL: "https://m.media-amazon.com/images/I/51G8y4+ZVgL.jpg",
      rating: 9.0,
    },
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState("");

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (filterRating === "" || movie.rating >= parseFloat(filterRating))
  );

  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, rating: parseFloat(newMovie.rating) }]);
  };

  return (
    <div className="container mt-3">
      <h1 className="text-center">🎬 Movie App</h1>
      <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} />
      <AddMovie addMovie={addMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
