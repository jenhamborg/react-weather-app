import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import InputSearch from "../components/reusable/searchInput";
import { act } from "react-dom/test-utils";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<InputSearch />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("Input Search Component", () => {
  const mockFunction = jest.fn();
  afterEach(() => {
    cleanup;
  });

  it("function is called with input value onKeyPress", async () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation((init) => [init, setState]);

    const { getByTestId } = render(
      <InputSearch
        data-testid="input"
        errorMessage={"Error!"}
        keyFunction={mockFunction}
        label={"enter city or zip code and hit enter"}
        maxCharacter={"10"}
        placeholder={"Enter City or Zip Code"}
        userValue={"test"}
        userValueSetter={setState}
        type={"search"}
      />
    );

    const inputNode = getByTestId("input");
    act(() => {
      fireEvent.change(inputNode, { target: { value: "Minneapolis" } });
      fireEvent.keyPress(inputNode, { key: "Enter", code: 13, charCode: 13 });
    });
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  it("onChange hits mock setter with expected data", async () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation((init) => [init, setState]);

    const { getByTestId } = render(
      <InputSearch
        data-testid="input"
        errorMessage={"Error!"}
        keyFunction={mockFunction}
        label={"enter city or zip code and hit enter"}
        maxCharacter={"10"}
        placeholder={"Enter City or Zip Code"}
        userValue={"test"}
        userValueSetter={setState}
        type={"search"}
      />
    );

    const inputNode = getByTestId("input");

    fireEvent.change(inputNode, { target: { value: "Minneapolis" } });

    expect(setState).toHaveBeenCalledWith("Minneapolis");
  });
});
