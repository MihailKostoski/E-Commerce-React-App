import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";

import CartItem from "./CartiItem/CartItem";
import { Link } from "react-router-dom";

function Cart({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) {
  const EmptyCard = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart, start adding some
      <Link to="/">start adding some</Link>
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart?.line_items?.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              item={item}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div>
        <Typography variant="h4">
          Subtotal : {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            onClick={handleEmptyCart}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
          >
            Empty Cart
          </Button>
          <Link to="/checkout">
            <Button
              size="large"
              type="button"
              variant="contained"
              color="primary"
            >
              Checkout
            </Button>
          </Link>
        </div>
      </div>
    </>
  );

  if (!cart?.line_items) return "Loading...";
  return (
    <Container sx={{ marginTop: 10 }}>
      <Typography variant="h5" gutterBottom>
        Your Shopping Cart
      </Typography>

      {!cart.line_items?.length ? <EmptyCard /> : <FilledCart />}
    </Container>
  );
}

export default Cart;
