import React from 'react';
import './Example.scss';

const Example = ({ title, count, buttonText, handleClick }) => (
  <div className="Example">
    <h1 className="Example-text">{title}</h1>
    <h2>Count: {count}</h2>
    <button onClick={handleClick}>{buttonText}</button>
  </div>
);

export default Example;
