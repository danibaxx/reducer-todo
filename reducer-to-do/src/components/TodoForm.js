import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer';

// bring in reducer and initial state
// add state
const TodoForm = () => {
  const [newTodo, setNewTodo] = useState();

  const [state, dispatch] = useReducer(reducer, initialState);

  // need handleSubmit and handleChanges

  return (
    // onSubmit for form
    // onChange within input
    <div className='todo-form'>
      <form>
        <input
          type='text'
          name='Todo'
          placeholder='Add Item'
          value={newTodo} 
        />
      </form>
        <button type='submit'>Add To Do</button>
        {/* onClick handleClear? */}
        <button>Clear</button>
    </div>
  );
};

export default TodoForm;