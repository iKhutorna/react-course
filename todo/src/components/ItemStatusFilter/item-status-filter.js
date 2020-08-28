import React, {Component} from "react";
import "./item-status-filter.sass";

export default class ItemStatusFilter extends Component {

  render () {
    const {onShowActive, onShowDone, onShowAll} = this.props;
    let classNames = "btn btn-outline-secondary";

    return (
      <div className="btn-group">
        <button type="button"
                className={classNames}
                onClick={onShowAll}>
          All
        </button>
        <button type="button"
                className={classNames}
                onClick={onShowActive}>
          Active
        </button>
        <button type="button"
                className={classNames}
                onClick={onShowDone}>
          Done
        </button>
      </div>
    );
  }
}
