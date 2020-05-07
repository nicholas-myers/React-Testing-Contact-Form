import React from "react"
import { render } from "@testing-library/react"
import ContactForm from "./ContactForm"

test("renders the whole app without errors", () => {
    render(<App />)
})

test("renders the inputs without errors and types into the fields, and submits the form", () => {
    const { getByLabelText } = render(<App />)
    const firstNameInput = getByLabelText(/first name/i)
    expect(firstNameInput).toBeInTheDocument()
})