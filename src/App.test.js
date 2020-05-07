import React from "react";
import { render, fireEvent, getByDisplayValue, getByTestId } from "@testing-library/react";
import App from "./App";
import { act } from "react-dom/test-utils";

test("renders App without crashing", () => {
  render(<App />);
});

test("renders the inputs without errors and types into the fields, and submits the form", () => {

  const { getByLabelText, getByTestId, getByDisplayValue } = render(<App />)

  //grab the inputs
  const firstNameInput = getByLabelText(/first name/i)
  const lastNameInput = getByLabelText(/last name/i)
  const emailInput = getByLabelText(/email/i)
  const messageInput = getByLabelText(/message/i)

  // check to see if the inputs exist
  expect(firstNameInput).toBeInTheDocument()
  expect(lastNameInput).toBeInTheDocument()
  expect(emailInput).toBeInTheDocument()
  expect(messageInput).toBeInTheDocument()
  

  // type some input using change
  fireEvent.change(firstNameInput, { target: { value: "Nik" }})
  fireEvent.change(lastNameInput, { target: { value: "Myers" }})
  fireEvent.change(emailInput, { target: { value: "n@n.com" }})
  fireEvent.change(messageInput, { target: { value: "I need help with tests!!" }})

   

  // console.log(firstNameInput.value)
  // console.log(lastNameInput.value)
  // console.log(emailInput.value)
  // console.log(messageInput.value)

  //check to see if what was changed exists
expect(getByDisplayValue(/nik/i)).toBeInTheDocument()
expect(getByDisplayValue(/myers/i)).toBeInTheDocument()
expect(getByDisplayValue(/n@n.com/i)).toBeInTheDocument()
expect(getByDisplayValue(/I need help with tests!!/i)).toBeInTheDocument()



//get the submit button and click
const submitUser = getByTestId(/submit/i)
expect(submitUser).toBeInTheDocument()
fireEvent.click(submitUser)

setTimeout(1000, ()=> {
const user = getByTestId(/user/i)
expect(user).toBeInTheDocument()
})


})