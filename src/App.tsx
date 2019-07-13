import React from 'react';
import './App.css';
import Header from './components/header/Header';
import TodoItem from './components/todo-item/Todo-Item';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <TodoItem />
    </div>
  );
};

export default App;
