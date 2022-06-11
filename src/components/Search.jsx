import React from "react";
import "../App.css";
export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "panda",
      type: "All",
    };
  }
  handleKey = (e) => {
    if (e.key === `Enter`) {
      this.props.SearchMovies(this.state.search, this.state.type);
    }
  };
  changeRadioBtn = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        return this.props.SearchMovies(this.state.search, this.state.type);
      }
    );
  };
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field ">
            <input
              placeholder="search"
              type="search"
              className="validate"
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.handleKey}
            />
            <button
              className="btn"
              onClick={() => {
                this.props.SearchMovies(this.state.search, this.state.type);
              }}
            >
              Search
            </button>
            <div>
              <label className="radioBtn">
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  data-type="All"
                  checked={this.state.type === "All"}
                  onChange={this.changeRadioBtn}
                />
                <span>All</span>
              </label>
              <label className="radioBtn">
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  data-type="movie"
                  checked={this.state.type === "movie"}
                  onChange={this.changeRadioBtn}
                />
                <span>Movies only</span>
              </label>
              <label className="radioBtn">
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  data-type="series"
                  checked={this.state.type === "series"}
                  onChange={this.changeRadioBtn}
                />
                <span>Series only</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
