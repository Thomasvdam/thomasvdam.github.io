import React from 'react';
import $ from './button.module.scss';

type props = {
    children: React.ReactChild | React.ReactChild[];
};

const Button = ({ children }: props) => (
  <button className={$.button}>
    {children}
  </button>
);

export default Button;
