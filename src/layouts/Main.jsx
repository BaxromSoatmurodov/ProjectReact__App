import React from "react";
import Loader from "../components/Loader";
import Movies from "../components/Movies";
import "../App.css";
import Search from "../components/Search";
export default class Main extends React.Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=c2f94ef9&s=panda")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }
  render() {
    return (
      <div className="container content">
        <Search />
        {this.state.movies.length ? (
          <Movies movies={this.state.movies} />
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}
