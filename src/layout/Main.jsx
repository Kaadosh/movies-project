import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchMovie = (str, type = "all") => {
    setLoading(true);
    fetch(
      `http://www.omdbapi.com/?apikey=ff8f5ed1&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    ).then((response) =>
      response.json().then((data) => {
        setLoading(false);
        setMovies(data.Search);
      })
    );
  };

  useEffect(() => {
    fetch("http://www.omdbapi.com/?apikey=ff8f5ed1&s=matrix")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  return (
    <main className="container content">
      <Search searchMovie={searchMovie} />
      {loading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  );
}

export default Main;
