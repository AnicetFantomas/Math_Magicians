import React from 'react';
import './quotes.css';
import Navigation from '../Navigations/Navigation';

const Quotes = () => (
  <div className="quote-container">
    <Navigation />
    <div className="quote">
      <p>
        “Sometimes it pays to stay in bed on Monday, rather than spending the rest
        of the week debugging Monday’s code.” – Dan Salomon
      </p>
    </div>
  </div>
);

export default Quotes;
