import React from "react";

class SearchBox extends React.Component {
  state = { term: "" };
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onsubmit(this.state.term);
  };

  render() {
    return (
      <div className=" ui segment">
        <div className="ui form">
          <form onSubmit={this.onFormSubmit} className="ui field">
            <label>video search</label>
            <input
              type="text"
              onChange={this.onInputChange}
              value={this.state.term}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBox;
