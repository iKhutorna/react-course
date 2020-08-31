import React, {Component} from "react";
import "./item-status-filter.sass";

export default class ItemStatusFilter extends Component {



  onClickAll = () => {
    this.props.onShowAll();
    this.setState(({buttons}) => {
      const newArr = buttons.map((el) => {
        if(el.key === "all") {
          el.active = true;
        } else {
          el.active = false;
        }
        return el;
      });
      return {
        buttons: newArr
      }
    });
  };

  onClickActive = () => {
    this.props.onShowActive();
    this.setState(({buttons}) => {
      const newArr = buttons.map((el) => {
        if(el.key === "active") {
          el.active = true;
        } else {
          el.active = false;
        }
        return el;
      });
      return {
        buttons: newArr
      }
    });
  };

  onClickDone = () => {
    this.props.onShowDone();
    this.setState(({buttons}) => {
      const newArr = buttons.map((el) => {
        if(el.key === "done") {
          el.active = true;
        } else {
          el.active = false;
        }
        return el;
      });
      return {
        buttons: newArr
      }
    });
  };

  state = {
    buttons: [
      {key: "all", label: "All", active: true, method: this.onClickAll},
      {key: "active", label: "Active", active: false, method: this.onClickActive},
      {key: "done", label: "Done", active: false, method: this.onClickDone}
    ]
  };

  render () {
    const elements = this.state.buttons.map((item) => {
      let classNames = "btn btn-outline-secondary";
      if(item.active) {
        classNames += " active";
      }
      return (
        <button type="button"
                key={item.key}
                className={classNames}
                onClick={item.method}>
          {item.label}
        </button>
      );
    });

    return (
      <div className="btn-group">
        {elements}
      </div>
    );
  }
}
