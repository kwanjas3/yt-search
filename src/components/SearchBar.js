import React, { Component } from "react";

class SearchBar extends Component {
  // state = {
  //   term: ""
  // };
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  onChange = term => {
    this.setState({
      term
    });
    this.props.onSearchTermChange(term);
  };

  render() {
    const { term } = this.state;
    console.log(this.state);
    return (
      <div className="search-bar">
        <input
          className="form-control searchbar"
          name="term"
          value={term}
          onChange={e => this.onChange(e.target.value)}
        />
      </div>
    );
  }
}
export default SearchBar;
