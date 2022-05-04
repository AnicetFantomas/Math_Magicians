import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculations/calculator';
import Home from './components/Home/Home';
import Quotes from './components/Quotes/Quotes';

const App = () => (
  <>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/Calculator" exact element={<Calculator />} />
      <Route path="/Quotes" exact element={<Quotes />} />
    </Routes>
  </>
);

export default App;
