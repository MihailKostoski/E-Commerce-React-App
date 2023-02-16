import React from "react";
import { useState, useEffect } from "react";
import { commerce } from "../../../lib/commerce";
import AddressForm from "../AddressForm";
import PaymentForm from "./PaymentForm";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,

  //CircularProgress,
  //Divider,
  //Button,
} from "@mui/material";

const steps = ["Shipping address", "Payment details"];

function Checkout({ cart }) {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        console.log(token);
        setCheckoutToken(token);
      } catch (error) {
        console.log(error);
      }
    };

    generateToken();
  }, [cart]);

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} />
    ) : (
      <PaymentForm />
    );
  const Confirmation = () => <div>Confirmation</div>;
  return (
    <>
      <main
        style={{
          position: "relative",
          top: "10rem",
          width: "auto",
          marginLeft: "5%",
          marginRight: "5%",
          borderTop: "1px solid grey",
        }}
      >
        <Paper>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </>
  );
}

export default Checkout;
