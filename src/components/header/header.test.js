import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Header from "./header.component";

describe("Header Component", () => {
  test("renders navigation and mini cart components", () => {
    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(getByText("Home")).toBeInTheDocument();
    expect(getByTestId("mini-cart")).toBeInTheDocument();
  });
});
