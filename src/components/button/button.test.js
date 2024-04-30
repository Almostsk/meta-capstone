import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./button.component";

describe("Button Component", () => {
  test("renders button with default styles and label", () => {
    const { getByRole } = render(<Button label="Submit" />);
    const button = getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Submit");
    expect(button).toHaveClass(
      "bg-primary2 hover:bg-transparent border border-primary2 text-primary1 hover:text-white py-1 px-3 rounded-full"
    );
  });

  test("renders button with additional classes", () => {
    const { getByRole } = render(
      <Button label="Submit" classes="additional-class" />
    );
    const button = getByRole("button");

    expect(button).toHaveClass(
      "bg-primary2 hover:bg-transparent border border-primary2 text-primary1 hover:text-white py-1 px-3 rounded-full additional-class"
    );
  });

  test("calls onClick callback when button is clicked", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <Button label="Submit" onClick={handleClick} />
    );
    const button = getByRole("button");

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("button type defaults to 'button'", () => {
    const { getByRole } = render(<Button label="Submit" />);
    const button = getByRole("button");

    expect(button).toHaveAttribute("type", "button");
  });

  test("button type can be set to 'submit'", () => {
    const { getByRole } = render(<Button label="Submit" type="submit" />);
    const button = getByRole("button");

    expect(button).toHaveAttribute("type", "submit");
  });
});
