import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='container'>
      <h3>About</h3>
      <p>Todo appllication</p>
      <p>Version 1.0</p>
      <Link className='btn btn-back' to='/'>
        Back
      </Link>
    </div>
  );
};

export default About;
