import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from "react-router-dom";
import Quotes from "./Quotes";

describe('Quote page of App', () => {
    test('Build the snapshot of the Quotes component safely', () => {
        const Quote = render(
            <Router>
                <Quotes />
            </Router>
        );
        expect(Quote).toMatchSnapshot();
    });
});