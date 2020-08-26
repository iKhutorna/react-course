import React, {Component} from "react";
import "./item-add-form.sass";

export default class ItemAddForm extends Component {
  render() {
    const {addItem} = this.props;
    return (
      <div className="item-add-form">
        <button type="button" className="btn btn-outline-secondary"
        onClick={()=>addItem("Hello world")}>
          Add item
        </button>
      </div>
    );
  };
};

