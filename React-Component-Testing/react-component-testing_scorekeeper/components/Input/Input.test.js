import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";



test("renders a label and an input with the correct attributes", () => {
    const handleChange = jest.fn();
  render(<Input 
  labelText="name"
  name="input-id"
  value=""
  onChange={handleChange}
  placeholder="Enter something"/>);

  const input = screen.getByLabelText("name");
  expect(input).toHaveAttribute("id", "input-id");
});

test("calls callback on every user input", async () => {});
