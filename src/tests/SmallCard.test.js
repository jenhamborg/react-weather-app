import React from "react";
import { render, cleanup } from "@testing-library/react";
import SmallCard from "../components/reusable/smallCard";

describe("Small Card", () => {
  afterEach(() => {
    cleanup;
  });

  it("Correct row data is displayed", async () => {
    const { getByText } = render(
      <SmallCard
        columnOneRowOne={"Apple"}
        columnOneRowTwo={"Orange"}
        columnTwoRowOne={"Strawberry"}
        columnTwoRowTwo={"Blueberry"}
      />
    );

    const contentOne = getByText("Apple");
    const contentTwo = getByText("Orange");
    const contentThree = getByText("Strawberry");
    const contentFour = getByText("Blueberry");

    expect(contentOne).toHaveTextContent("Apple");
    expect(contentTwo).toHaveTextContent("Orange");
    expect(contentThree).toHaveTextContent("Strawberry");
    expect(contentFour).toHaveTextContent("Blueberry");
  });
});
