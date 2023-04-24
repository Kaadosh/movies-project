import React from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

class Main extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=ff8f5ed1&s=matrix").then((response) =>
      response.json().then((data) => this.setState({ movies: data.Search }))
    );
  }

  searchMovie = (str) => {
    fetch(`http://www.omdbapi.com/?apikey=ff8f5ed1&s=${str}`).then((response) =>
      response.json().then((data) => this.setState({ movies: data.Search }))
    );
  };

  render() {
    const { movies } = this.state;
    return (
      <main className="container content">
        <Search searchMovie={this.searchMovie} />
        {movies.length ? <Movies movies={movies} /> : <Preloader />}
      </main>
    );
  }
}

export default Main;
