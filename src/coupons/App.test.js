import { render, screen } from '@testing-library/react';
import App from './App';

it("search-bar", () => {
    const {queryByTitle} = render(<App/>);
    const search__bar = queryByTitle("search-bar");
    expect(search__bar).toBeTruthy();
  })

  it("coupons", () => {
    const {queryByTitle} = render(<App/>);
    const coupons = queryByTitle("coupons");
    expect(coupons).toBeTruthy();
  })