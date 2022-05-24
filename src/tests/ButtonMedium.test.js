import React from "react";
import { render, cleanup } from "@testing-library/react";
import ButtonMedium from "../components/reusable/mediumButton";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<ButtonMedium />).toJSON();
  expect(tree).toMatchSnapshot();
});

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
