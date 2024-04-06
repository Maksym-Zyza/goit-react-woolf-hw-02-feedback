import React from 'react';

export const Section = ({ title = '', children }) => {
  return (
    <div>
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
};
