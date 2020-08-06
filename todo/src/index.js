import React from 'react';
import ReactDom from 'react-dom';

const el = (
  <div>
    <h1>My Todo List</h1>
    <input type="search" placeholder="search"/>
    <ul>
      <li>Create Todo list</li>
      <li>Learn React</li>
    </ul>
  </div>
);

ReactDom.render(el, document.getElementById('root'));
