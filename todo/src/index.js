import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from "./components/app-header";
import SearchPannel from "./components/search-panel";
import TodoList from "./components/todo-list";

const todoData = [
  { label: 'drink coffee', important: false, id: 1 },
  { label: 'Make Awesome App', important: true, id: 2 },
  { label: 'Have a lunch', important: false, id:3 }
];

const App = () => {
  return (
    <div>
      <AppHeader/>
      <SearchPannel/>
      <TodoList todos={ todoData }/>
    </div>
  );
};

ReactDom.render(<App/>, document.getElementById('root'));
