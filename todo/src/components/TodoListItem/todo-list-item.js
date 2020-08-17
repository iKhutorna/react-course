import React, {Component} from "react";
import "./todo-list-item.sass";

export default class TodoListItem extends Component {

  onLabelClick = () => {
    console.log(`Done: ${this.props.label}`);
  };

  // constructor() {
  //   super();
  //   this.onLabelClick = () => {
  //     console.log(`Done: ${this.props.label}`)
  //   }
  // }
  
  render () {
    const {label, important=false} = this.props;

    const style = {
      color: important ? "steelblue" : "black",
      fontWeight: important ? "bold" : "normal"
    };

    return (
      <span>
      <span
        className="todo-list-item"
        style={style}
        onClick={this.onLabelClick}>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
    );
  }
};
