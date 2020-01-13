import React from 'react';
import spinner from './spinner.gif';

function Spinner() {
  return (
    <div style={wrapper}>
      <img style={style} src={spinner} alt='pro-loader' />
    </div>
  );
}

const wrapper = {
  display: 'flex',
  justifyContent: 'center',
  alignItem: 'center'
};

const style = {
  display: 'block',
  width: '30px',
  height: '30x'
};

export default Spinner;
