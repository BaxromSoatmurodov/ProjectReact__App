import React from "react";
import Loader from "../components/Loader";
import Movies from "../components/Movies";
import "../App.css";
import Search from "../components/Search";
export default class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  };
  componentDidMount() {
    this.setState({ loading: true });
    fetch("http://www.omdbapi.com/?apikey=c2f94ef9&s=panda")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }
  SearchMovies = (str, type = "All") => {
    this.setState({ loading: true });
    fetch(
      `http://www.omdbapi.com/?apikey=c2f94ef9&s=${str}&type=${
        type !== "All" ? ` ${type} ` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  };
  render() {
    return (
      <div className="container content">
        <Search SearchMovies={this.SearchMovies} />
        {this.state.loading ? (
          <Loader />
        ) : (
          <Movies movies={this.state.movies} />
        )}
      </div>
    );
  }
}
