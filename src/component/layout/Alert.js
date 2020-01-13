import React, { useContext } from 'react';
import todoContext from '../../context/todoContext';

function Alert() {
  const { alert } = useContext(todoContext);
  return (
    <p className='container' style={style}>
      {alert}
    </p>
  );
}

const style = {
  color: 'white',
  backgroundColor: ' rgb(253, 38, 38)',
  margin: '1rem auto',
  padding: '0.5rem'
};

export default Alert;
