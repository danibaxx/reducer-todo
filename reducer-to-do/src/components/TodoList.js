import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
  return (
    <div>
      <h3>Hi from TodoList</h3>
      <TodoForm />
      <Todo />
    </div>
  );
};

export default TodoList;