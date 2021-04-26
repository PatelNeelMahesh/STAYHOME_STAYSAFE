import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/loading/i);
//   expect(linkElement).toBeInTheDocument();
// });

it("checkdiv", () => {
    const {queryByTitle} = render(<App/>);
    const btn = queryByTitle("testdiv");
    expect(btn).toBeTruthy();
  })