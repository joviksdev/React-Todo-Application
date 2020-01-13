import React, { useReducer, useEffect } from 'react';
import todoReducer from './todoReducer';
import Context from './todoContext';

const TodoState = props => {
  const initialState = {
    todos: [],
    alert: null,
    loading: false
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  //get todo
  const getTodo = () => {
    setLoading();
    const todos = localStorage.getItem('todo');
    if (todos !== null) {
      dispatch({
        type: 'GET_TODO',
        payload: JSON.parse(todos)
      });
    }
  };

  useEffect(() => {
    getTodo();
    // eslint-disable-next-line
  }, []);

  //set check
  const setCheck = id => {
    const todos = state.todos.filter(todo => {
      if (state.todos.indexOf(todo) === parseInt(id)) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    dispatch({
      type: 'SET_CHECK',
      payload: todos
    });
  };

  //set Update
  const setUpdate = activity => {
    const value = {
      activity,
      completed: false
    };

    const todos = JSON.parse(localStorage.getItem('todo'));

    if (todos !== null) {
      todos.push(value);
      localStorage.setItem('todo', JSON.stringify(todos));
    } else {
      let todos = [];
      todos.push(value);
      localStorage.setItem('todo', JSON.stringify(todos));
    }

    getTodo();
  };

  //set Alert

  const setAlert = alert => {
    dispatch({
      type: 'SET_ALERT',
      payload: alert
    });
    removeAlert();
  };

  //remove alert

  const removeAlert = () => {
    setTimeout(() => {
      dispatch({
        type: 'REMOVE_ALERT'
      });
    }, 3000);
  };

  //delete todo
  const delTodo = index => {
    let todos = JSON.parse(localStorage.getItem('todo'));
    if (todos !== null) {
      let delTodos = todos.filter(
        todo => todos.indexOf(todo) !== parseInt(index)
      );
      localStorage.setItem('todo', JSON.stringify(delTodos));

      getTodo();
    }
  };

  //set Loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
    <Context.Provider
      value={{
        loading: state.loading,
        todos: state.todos,
        alert: state.alert,
        getTodo,
        setUpdate,
        delTodo,
        setCheck,
        setAlert
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default TodoState;
