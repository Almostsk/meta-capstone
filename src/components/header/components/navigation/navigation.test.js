import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navigation from "./navigation.component";

describe("Navigation Component", () => {
  test("renders navigation links", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Booking")).toBeInTheDocument();
  });
});
