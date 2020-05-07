import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test("renders the inputs without errors and types into the fields, and submits the form", () => {

  const { getByLabelText, getByText } = render(<App />)

  const firstNameInput = getByLabelText(/first name/i)
  const lastNameInput = getByLabelText(/last name/i)
  const emailInput = getByLabelText(/email/i)
  const messageInput = getByLabelText(/message/i)

  expect(firstNameInput).toBeInTheDocument()
  expect(lastNameInput).toBeInTheDocument()
  expect(emailInput).toBeInTheDocument()
  expect(messageInput).toBeInTheDocument()
  
  fireEvent.change(firstNameInput, { target: { value: "Nick" }})

  console.log(firstNameInput.value)
  // const myName = getByDisplayValue(/nick/i)
  // expect(myName).toBeInTheDocument()
})