import React from 'react';

const Button = ({ children, color, onClick }) => {
  return (
    <button onClick={onClick} className={`btn-category ` + color}>
      {children}
    </button>
  );
};

export default Button;
