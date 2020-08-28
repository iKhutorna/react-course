import React, {Component} from "react";
import "./search-panel.sass"

export default class SearchPanel extends Component {
  render() {
    const {onSearchChange} = this.props;
    return (
      <input type="text"
             className="form-control search-input"
             placeholder="search"
             onChange={onSearchChange}/>
    )
  };
};

