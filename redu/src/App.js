import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Filter from './components/Filter';

const App = () => (
  <Provider store={store}>
    <div style={{ padding: '20px' }}>
      <AddTodo />
      <Filter />
      <TodoList />
    </div>
  </Provider>
);

export default App;

