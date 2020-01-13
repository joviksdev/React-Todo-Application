import React from 'react';

function Footer() {
  return (
    <footer style={setStyle}>
      <p>&copy; Copyright, Todo Application by Emmanuel Tochukwu</p>
    </footer>
  );
}

const setStyle = {
  textAlign: 'center',
  margin: '1rem auto'
};

export default Footer;
