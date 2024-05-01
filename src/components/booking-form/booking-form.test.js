import React from "react";
import { render } from "@testing-library/react";
import BookingForm from "./booking-form.component";

jest.mock("../../utils/fakeAPI", () => ({
  submitAPI: jest.fn(), // Mocking the submitAPI function
}));
const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

describe("BookingForm Component", () => {
  test("renders form with customer info fields", () => {
    const formComponent = render(<BookingForm />);

    const name = formComponent.getByTestId("nameField");
    const phoneNumber = formComponent.getByTestId("phoneNumberField");
    const time = formComponent.getByTestId("timeField");
    const occasion = formComponent.getByTestId("occasionField");

    expect(name).toBeInTheDocument();
    expect(phoneNumber).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(occasion).toBeInTheDocument();
  });
});
