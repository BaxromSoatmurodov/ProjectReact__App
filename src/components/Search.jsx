import React from "react";
export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field inline">
            <input
              placeholder="search"
              type="search"
              className="validate"
              value={this.state.search}
            />
          </div>
        </div>
      </div>
    );
  }
}
