import React, { useState, useContext } from 'react';

import todoContext from '../../context/todoContext';
import Alert from './Alert';

const Form = () => {
  const { setAlert, setUpdate, alert } = useContext(todoContext);

  let [activity, setActivity] = useState('');

  const setChange = e => {
    setActivity((activity = e.target.value));
  };

  const submitForm = e => {
    e.preventDefault();
    if (activity === '') {
      setAlert('*Field can not be empty');
    } else {
      setUpdate(activity);
    }
    setActivity((activity = ''));
    e.target.reset();
  };

  return (
    <React.Fragment>
      {alert !== null && <Alert />}
      <form className='container form-group' onSubmit={submitForm}>
        <input
          className='form-input'
          type='text'
          name='activity'
          placeholder='Enter Activity...'
          onChange={setChange}
        />
        <input className='btn btn-submit' type='submit' value='Submit' />
      </form>
    </React.Fragment>
  );
};

export default Form;
