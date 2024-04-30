import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Confirmation from "./confirmation.component";

const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

describe("Confirmation Component", () => {
  const mockData = {
    name: "John Doe",
    phoneNumber: "1234567890",
    date: new Date(),
    time: "10:00 AM",
    occasion: "Meeting",
  };

  test("renders with provided data", () => {
    const { getByText } = render(
      <Confirmation data={mockData} isOpen={true} />
    );

    expect(getByText("Success")).toBeInTheDocument();
    expect(getByText("Name")).toBeInTheDocument();
    expect(getByText("Phone")).toBeInTheDocument();
    expect(getByText("Date")).toBeInTheDocument();
    expect(getByText("Time")).toBeInTheDocument();
    expect(getByText("Occasion")).toBeInTheDocument();
    expect(getByText(mockData.name)).toBeInTheDocument();
    expect(getByText(mockData.phoneNumber)).toBeInTheDocument();
    expect(getByText("Meeting")).toBeInTheDocument();
  });
});
