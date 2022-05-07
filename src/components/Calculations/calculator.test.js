import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Calculator from './calculator';

describe('Calculator page of App', () => {
  test('Build the snapshot of the Calculator component safely', () => {
    const calc = render(
      <Router>
        <Calculator />
      </Router>,
    );
    expect(calc).toMatchSnapshot();
  });
});
