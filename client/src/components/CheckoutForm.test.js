import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'
// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    const { getByText } = render(<CheckoutForm />)

    const header = getByText(/Checkout Form/i)

    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", async () => {
  
    // const successMessage = screen.getByTestId(/successMessage/i) 
const {getByTestId , getByLabelText} = render(<CheckoutForm />);

const firstNameInput = getByLabelText(/First Name:/i);
await userEvent.type(firstNameInput, 'bill');
expect(firstNameInput).toHaveValue('bill');
const checkoutButton = getByTestId(/checkout/i)

fireEvent.change(firstNameInput,)
fireEvent.click(checkoutButton)

const success = getByTestId('successMessage');
    

    expect(success).toBeInTheDocument();
});
