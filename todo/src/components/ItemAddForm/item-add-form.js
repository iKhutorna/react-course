import React, {Component} from "react";
import "./item-add-form.sass";

export default class ItemAddForm extends Component {
  state = {
    label: ""
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.label);
    this.setState({
      label: ""
    });
  };

  render() {
    const {addItem} = this.props;
    return (
      <form className="item-add-form d-flex"
        onSubmit = {this.onSubmit}>
        <input type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="What needs to be done"
          value = {this.state.label}/>
        <button type="submit" className="btn btn-outline-secondary">
          Add item
        </button>
      </form>
    );
  };
};

