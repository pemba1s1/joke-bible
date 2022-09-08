import React from 'react';

const Button = ({ children, color }) => {
  return <button className={`btn-category ` + color}>{children}</button>;
};

export default Button;
