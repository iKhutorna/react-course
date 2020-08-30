import React, {Component} from "react";
import "./search-panel.sass"

export default class SearchPanel extends Component {
  state = {
    value: ""
  };

  onChange = (e) => {
    const newValue = e.target.value.toLowerCase();
    this.props.onSearchChange(newValue);
    this.setState ({
      value: newValue
    });
  };
  render() {
    return (
      <input type="text"
             className="form-control search-input"
             placeholder="search"
             onChange={this.onChange}
             value = {this.state.value}/>
    )
  };
};

