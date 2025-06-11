import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
};

const TodoList = ({ todos, dispatch }) => (
  <ul>
    {todos.map((todo, index) => (
      <li
        key={index}
        onClick={() => dispatch(toggleTodo(index))}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer'
        }}
      >
        {todo.text}
      </li>
    ))}
  </ul>
);

// Map state to props, filtering todos based on the visibility filter
const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

export default connect(mapStateToProps)(TodoList)