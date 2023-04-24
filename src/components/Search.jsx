import React from "react";

class Search extends React.Component {
  state = {
    search: "",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovie(this.state.search);
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              placeholder="search"
              id="email_inline"
              type="search"
              className="validate"
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.handleKey}
            />
            <button
              className="btn btn-search blue-grey lighten-3"
              onClick={() => this.props.searchMovie(this.state.search)}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
