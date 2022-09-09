import React from 'react';

export const Label = ({ like }) => {
  if (like <= 50) return <p className="blue">Popular</p>;
  else if (like > 50 && like <= 100) return <p className="orange">Trending</p>;
  else if (like > 100) <p className="red">Epic</p>;
};
