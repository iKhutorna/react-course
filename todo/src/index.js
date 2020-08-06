import React from 'react';
import ReactDom from 'react-dom';

const TodoList = () => {
  return (
    <ul>
      <li>Create Todo list</li>
      <li>Learn React</li>
    </ul>
  );
};

const AppHeader = () => {
  return (
    <h1>My Todo List</h1>
  );
};

const SearchPannel = () => {
  return (
    <input type="search" placeholder="search"/>
  );
};

const App = () => {
  return (
    <div>
      <AppHeader/>
      <SearchPannel/>
      <TodoList/>
    </div>
  );
};

ReactDom.render(<App/>, document.getElementById('root'));
