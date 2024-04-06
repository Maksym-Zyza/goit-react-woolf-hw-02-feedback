import React from 'react';
import css from './Section.module.scss';

export const Section = ({ title = '', children }) => {
  return (
    <div className={css.section}>
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
};
