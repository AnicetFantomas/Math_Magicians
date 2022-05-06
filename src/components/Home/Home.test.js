import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

describe('Home page of App', () => {
  test('Build the snapshot of the Home component safely', () => {
    const home = render(
      <Router>
        <Home />
      </Router>,
    );
    expect(home).toMatchSnapshot();
  });
});
