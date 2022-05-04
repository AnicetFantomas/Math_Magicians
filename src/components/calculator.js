import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: '',
      total: 0,
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => calculate({
      next: state.next,
      total: state.total,
      operation: state.operation,
    }, e.target.innerHTML));
  }

  render() {
    const { next, total, operation } = this.state;
    return (
      <section>
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
            <button type="button" className="button clear-all" onClick={this.handleClick}>AC</button>
            <button type="button" className="button last-entity-clear" onClick={this.handleClick}>+/-</button>
            <button type="button" className="button operation" onClick={this.handleClick}>%</button>
            <button type="button" className="button operation side-col" onClick={this.handleClick}>÷</button>

            <button type="button" className="button number" onClick={this.handleClick}>7</button>
            <button type="button" className="button number" onClick={this.handleClick}>8</button>
            <button type="button" className="button number" onClick={this.handleClick}>9</button>
            <button type="button" className="button operation side-col" onClick={this.handleClick}>x</button>

            <button type="button" className="button number" onClick={this.handleClick}>4</button>
            <button type="button" className="button number" onClick={this.handleClick}>5</button>
            <button type="button" className="button number" onClick={this.handleClick}>6</button>
            <button type="button" className="button operation side-col" onClick={this.handleClick}>-</button>

            <button type="button" className="button number" onClick={this.handleClick}>1</button>
            <button type="button" className="button number" onClick={this.handleClick}>2</button>
            <button type="button" className="button number" onClick={this.handleClick}>3</button>
            <button type="button" className="button operation side-col" onClick={this.handleClick}>+</button>

            <button type="button" className="button number btn-0" onClick={this.handleClick}>0</button>
            <button type="button" className="button number" onClick={this.handleClick}>.</button>
            <button type="button" className="button equal side-col" onClick={this.handleClick}>=</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Calculator;
