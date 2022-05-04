import React, { useState } from 'react';
import './calculator.css';
import calculate from '../../logic/calculate';
import Navigation from '../Navigations/Navigation';

const Calculator = () => {
  const [initialCalc, setCalc] = useState({
    next: '',
    total: 0,
    operation: '',
  });
  const { next, total, operation } = initialCalc;

  const handleClick = (e) => {
    e.preventDefault();
    setCalc((state) => calculate({
      next: state.next,
      total: state.total,
      operation: state.operation,
    }, e.target.innerHTML));
  };

  return (
    <>
      <Navigation />
      <section>
        <div className="side-intro">Let&apos;s do some math !</div>
        <div className="container">
          <div className="display">
            <div className="display-result">
              {total}
              {' '}
              {operation}
              {' '}
              {next}
            </div>
          </div>
          <div className="all-buttons">
            <button type="button" className="button clear-all" onClick={handleClick}>AC</button>
            <button type="button" className="button last-entity-clear" onClick={handleClick}>+/-</button>
            <button type="button" className="button operation" onClick={handleClick}>%</button>
            <button type="button" className="button operation side-col" onClick={handleClick}>÷</button>

            <button type="button" className="button number" onClick={handleClick}>7</button>
            <button type="button" className="button number" onClick={handleClick}>8</button>
            <button type="button" className="button number" onClick={handleClick}>9</button>
            <button type="button" className="button operation side-col" onClick={handleClick}>x</button>

            <button type="button" className="button number" onClick={handleClick}>4</button>
            <button type="button" className="button number" onClick={handleClick}>5</button>
            <button type="button" className="button number" onClick={handleClick}>6</button>
            <button type="button" className="button operation side-col" onClick={handleClick}>-</button>

            <button type="button" className="button number" onClick={handleClick}>1</button>
            <button type="button" className="button number" onClick={handleClick}>2</button>
            <button type="button" className="button number" onClick={handleClick}>3</button>
            <button type="button" className="button operation side-col" onClick={handleClick}>+</button>

            <button type="button" className="button number btn-0" onClick={handleClick}>0</button>
            <button type="button" className="button number" onClick={handleClick}>.</button>
            <button type="button" className="button equal side-col" onClick={handleClick}>=</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Calculator;
