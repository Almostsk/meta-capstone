import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App Component", () => {
  test("renders Home component for '/' route", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(getByText("Little Lemon")).toBeInTheDocument();
  });

  test("renders Booking component for '/checkout' route", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/checkout"]}>
        <App />
      </MemoryRouter>
    );

    expect(
      getByText("Please fill all following information to reserve a table.")
    ).toBeInTheDocument();
  });
});
