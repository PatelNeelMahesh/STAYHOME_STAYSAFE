import { render, screen } from '@testing-library/react';
import Coupon from './Coupons';

it("test-coupon", () => {
    const {queryByTitle} = render(<Coupon/>);
    const test__coupon = queryByTitle("test-coupon");
    expect(test__coupon).toBeTruthy();
  })

  it("test-coupon-img", () => {
    const {queryByTitle} = render(<Coupon/>);
    const test__coupon__img = queryByTitle("test-coupon-img");
    expect(test__coupon__img).toBeTruthy();
  })

  it("test-coupon-title", () => {
    const {queryByTitle} = render(<Coupon/>);
    const test__coupon__title = queryByTitle("test-coupon-title");
    expect(test__coupon__title).toBeTruthy();
  })

  it("test-coupon-container", () => {
    const {queryByTitle} = render(<Coupon/>);
    const test__coupon__container = queryByTitle("test-coupon-container");
    expect(test__coupon__container).toBeTruthy();
  })

  it("test-coupon-code", () => {
    const {queryByTitle} = render(<Coupon/>);
    const test__coupon__code = queryByTitle("test-coupon-code");
    expect(test__coupon__code).toBeTruthy();
  })