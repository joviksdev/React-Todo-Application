import React, { useContext } from 'react';
import todoContext from '../../context/todoContext';
import Spinner from '../layout/Spinner';

const TodoItem = () => {
  const context = useContext(todoContext);

  const { todos, setCheck, delTodo, loading } = context;

  const onChange = e => {
    setCheck(e.target.id);
  };

  const setDelete = e => {
    delTodo(e.target.id);
  };

  if (loading) {
    return <Spinner />;
  } else {
    return todos.map(todo => {
      const id = todos.indexOf(todo);
      const setStyle = () => ({
        padding: '0.4rem 0',
        color: todo.completed ? 'gray' : '#141110',
        textDecoration: todo.completed ? 'line-through' : '',
        fontStyle: todo.completed ? 'italic' : ''
      });

      return (
        <div className='container todo-item' key={id}>
          <div>
            <input type='checkbox' id={id} onChange={onChange} />{' '}
            <label>Completed</label>
          </div>
          <p style={setStyle()}>{todo.activity}</p>
          <input
            className='btn btn-delete'
            onClick={setDelete}
            id={id}
            type='button'
            value='Delete'
          />
        </div>
      );
    });
  }
};

export default TodoItem;
