import { render } from "@testing-library/react";
import renderer from "react-test-renderer"
import calculator from './calculator'

describe('Calculator page of App', () => {
    test('Build tje snapshot of the calculator component safely', () => {
        const rend = renderer.create(<calculator />);
        expect(rend.toJSON()).toMatchSnapshot();
    });
    test('Render Calculator component', () => {
        render(<calculator />)
    });
});