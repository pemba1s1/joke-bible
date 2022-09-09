import React from 'react';

export const Tags = ({ label, color }) => {
  return (
    <div>
      <div className={`tag ` + color}>{label}</div>
    </div>
  );
};
