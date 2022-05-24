import React from "react";
import { render, cleanup } from "@testing-library/react";
import ButtonMedium from "../components/reusable/mediumButton";

describe("Medium Button", () => {
  afterEach(() => {
    cleanup;
  });

  it("Correct text is displayed", async () => {
    const mockFunction = jest.fn();
    const { getByText } = render(
      <ButtonMedium onClick={mockFunction} text="New York" />
    );

    const button = getByText("New York");

    expect(button).toHaveTextContent("New York");
  });
});
