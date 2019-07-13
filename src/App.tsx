import React from 'react';
import './App.css';
import Header from './components/header/Header';
import TodoItem from './components/todo-item/Todo-Item';

const App: React.FC = () => {
  const close = () => console.log('closed');
  const item = { value: 'learn react', isDone: false };
  return (
    <div className="App">
      <Header />
      <TodoItem value={item.value} itemClass={item.isDone ? 'done' : 'undone'} onClose={close} />
    </div>
  );
};

export default App;
