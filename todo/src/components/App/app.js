import React, {Component} from "react";

import AppHeader from "components/AppHeader";
import SearchPanel from "components/SearchPanel";
import TodoList from "components/TodoList";
import ItemStatusFilter from "components/ItemStatusFilter";
import ItemAddForm from "../ItemAddForm";

import "./app.sass";

export default class App extends Component {
  maxId = 100;
  state = {
    todoData: [
      this.createTodoItem("drink coffee"),
      this.createTodoItem("Make Awesome App"),
      this.createTodoItem("Have a lunch"),
    ]
  };

  createTodoItem (label) {
    return {
      label,
      important: false,
      hidden: false,
      done: false,
      id: this.maxId++,
    };
  };

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx+1)
      ];
      return {
        todoData: newArray
      }
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({todoData}) => {
      const newArr = [
        ...todoData,
        newItem
      ];
      return {
        todoData: newArr
      }
    });
  };


  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {...oldItem,
      [propName]: !oldItem[propName]};
    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];
  }

  onToggleDone = (id) => {
    this.setState (({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done")
      }
    });
  };

  onToggleImportant = (id) => {
    this.setState (({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important")
      }
    });
  };

  onSearchChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    this.setState (({todoData}) => {
      const newArr = todoData.map((el) => {
        if(el.label.toLowerCase().includes(searchValue)) {
          el.hidden = false;
        } else {
          el.hidden = true;
        }
        return el;
      });

      return {
        todoData: newArr
      }
    });
  };

  onShowActive = () => {
    this.setState (({todoData}) => {
      const newArr = todoData.map((el) => {
        if(el.done) {
          el.hidden = true;
        } else {
          el.hidden = false;
        }
        return el;
      });
      return {
        todoData: newArr
      }
    });
  };

  onShowDone = () => {
    this.setState(({todoData}) => {
      const newArr = todoData.map((el) => {
        if(el.done) {
          el.hidden = false;
        } else {
          el.hidden = true;
        }
        return el;
      });
      return {
        todoData: newArr
      }
    });
  };

  onShowAll = () => {
    this.setState(({todoData}) => {
      const newArr = todoData.map((el) => {
        el.hidden = false;
        return el;
      });
      return {
        todoData: newArr
      }
    });
  };



  render () {
    const {todoData} = this.state;
    console.log(todoData);
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount}/>
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange}/>
          <ItemStatusFilter
            onShowActive={this.onShowActive}
            onShowDone={this.onShowDone}
            onShowAll={this.onShowAll}/>
        </div>
        <TodoList
          todos={ todoData }
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}/>
        <ItemAddForm
          addItem={this.addItem}/>
      </div>
    );
  }
};

