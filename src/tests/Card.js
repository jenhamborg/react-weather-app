import React from "react";
import { render, cleanup } from "@testing-library/react";
import Card from "../components/reusable/card";

describe("Card", () => {
  afterEach(() => {
    cleanup;
  });

  it("Correct row data is displayed", async () => {
    const { getByText, getByTestId, getByAltText } = render(
      <Card
        centerData={"center data"}
        icon={"icon-content"}
        iconDescription={"icon description"}
        title={"title content"}
      />
    );

    const centerData = getByText("center data");
    const icon = getByTestId("card-icon");
    const iconDescription = getByAltText("icon description");
    const title = getByText("title content");

    expect(centerData).toHaveTextContent("center data");
    expect(icon).toHaveProperty(
      "src",
      "http://openweathermap.org/img/wn/icon-content@2x.png"
    );
    expect(iconDescription).toHaveProperty("alt", "icon description");
    expect(title).toHaveTextContent("title content");
  });
});
