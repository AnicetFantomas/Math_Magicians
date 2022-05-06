import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation';

describe('Home page of App', () => {
  test('Build the snapshot of the Home component safely', () => {
    const nav = render(
      <Router>
        <Navigation />
      </Router>,
    );
    expect(nav).toMatchSnapshot();
  });
});
