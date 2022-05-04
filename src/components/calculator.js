import React from 'react';
import './calculator.css';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="display">
            <div className="display-result">0</div>
          </div>
          <div className="all-buttons">
            <button type="button" className="button clear-all">AC</button>
            <button type="button" className="button last-entity-clear">+/-</button>
            <button type="button" className="button operation">%</button>
            <button type="button" className="button operation side-col">/</button>

            <button type="button" className="button number">7</button>
            <button type="button" className="button number">8</button>
            <button type="button" className="button number">9</button>
            <button type="button" className="button operation side-col">X</button>

            <button type="button" className="button number">4</button>
            <button type="button" className="button number">5</button>
            <button type="button" className="button number">6</button>
            <button type="button" className="button operation side-col">-</button>

            <button type="button" className="button number">1</button>
            <button type="button" className="button number">2</button>
            <button type="button" className="button number">3</button>
            <button type="button" className="button operation side-col">+</button>

            <button type="button" className="button number btn-0">0</button>
            <button type="button" className="button number">.</button>
            <button type="button" className="button equal side-col">=</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Calculator;
