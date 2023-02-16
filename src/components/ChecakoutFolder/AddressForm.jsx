import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  // Button,
  Grid,
  Typography,
} from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./Checkout/CustomTextField";
import { commerce } from "../../lib/commerce";

function AddressForm({ checkoutToken }) {
  const [shippingCountries, setShippingCountires] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const methods = useForm();
  const fetchShippingCountries = async (chekoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      chekoutTokenId
    );
    console.log(countries);
    setShippingCountires(countries);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <FormProvider {...methods}>
        <form /*onSubmit=""*/>
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First name" />
            <FormInput required name="lastName" label="First name" />
            <FormInput required name="address1" label="Address" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="City" />
            <FormInput required name="zip" label="ZIP / Postal code" />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select
                value={shippingCountry}
                fullWidth
                onChange={(e) => setShippingCountry(e.target.value)}
              >
                {Object.entries(shippingCountries)
                  .map(([code, name]) => ({ id: code, label: name }))
                  .map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.label}
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
}

export default AddressForm;
