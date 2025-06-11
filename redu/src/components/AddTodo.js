import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  const [text, setText] = useState('');

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={() => {
        if (text.trim()) {
          dispatch(addTodo(text));
          setText('');
        }
      }}>
        Add Todo
      </button>
    </div>
  );
};

export default connect()(AddTodo);