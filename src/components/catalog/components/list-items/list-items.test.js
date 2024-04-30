import React from "react";
import { render, within } from "@testing-library/react";
import ListItems from "./list-items.component";
import { LIST_DATA } from "./list-items.constants";

describe("ListItems Component", () => {
  test("renders ListItem component for each item in LIST_DATA", () => {
    const { getAllByTestId } = render(<ListItems />);

    const listItemElements = getAllByTestId("list-item");

    expect(listItemElements).toHaveLength(LIST_DATA.length);
  });

  test("passes correct props to each ListItem component", () => {
    const { getAllByTestId } = render(<ListItems />);

    const listItemElements = getAllByTestId("list-item");

    listItemElements.forEach((element, index) => {
      const listItemProps = LIST_DATA[index];
      const { getByText, getByAltText } = within(element);

      expect(getByText(listItemProps.name)).toBeInTheDocument();
      expect(getByText(listItemProps.description)).toBeInTheDocument();
      expect(getByText(listItemProps.price)).toBeInTheDocument();
      expect(getByAltText(listItemProps.name)).toBeInTheDocument();
      // Add assertions for any other props you want to test
    });
  });
});
