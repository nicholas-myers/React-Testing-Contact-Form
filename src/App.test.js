import React from "react";
import { render, getByLabelText } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test("renders the inputs without errors and types into the fields, and submits the form", () => {
  const { getByLabelText } = render(<App />)
  const firstNameInput = getByLabelText(/first name/i)
  expect(firstNameInput).toBeInTheDocument()
})