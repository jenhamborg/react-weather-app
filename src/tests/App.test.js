import React from "react";
import { axe } from "jest-axe";
import { render, cleanup } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  beforeAll(() => {
    render(<App />);
  });
  afterEach(cleanup);
  it("should not have basic accessibility issues", async () => {
    const { container } = render(<App />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

});
