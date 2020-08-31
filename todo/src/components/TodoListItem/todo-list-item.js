import React, {Component} from "react";
import "./todo-list-item.sass";

export default class TodoListItem extends Component {

  render () {
    const {label, onDeleted, onToggleImportant, onToggleDone, important, done, hidden} = this.props;

    let classNames = "todo-list-item";

    if (done) {
      classNames += " done";
    }

    if (important) {
        classNames += " important";
    }

    if (hidden) {
      classNames += " hidden"
    }

    return (
      <div className={classNames}>
        <div
          className="todo-list-item-label"
          onClick={onToggleDone}>
          {label}
        </div>

        <div className="todo-list-item-buttons">
          <button type="button"
            className="btn btn-outline-success btn-sm float-right"
            onClick={onToggleImportant}>
            <i className="fa fa-exclamation" />
          </button>

          <button type="button"
            className="btn btn-outline-danger btn-sm float-right"
            onClick={onDeleted}>
            <i className="fa fa-trash-o" />
          </button>
        </div>
      </div>
    );
  }
};
