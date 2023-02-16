import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";

function CartItem({ item, handleUpdateCartQty, handleRemoveFromCart }) {
  return (
    <div>
      <Card>
        <CardMedia
          sx={{ height: 0, paddingTop: "56.25%" }}
          image={item.image.url}
          alt={item.name}
        />
        <CardContent>
          <Typography variant="h4">{item.name}</Typography>
          <Typography variant="h5">
            {item.line_total.formatted_with_symbol}
          </Typography>
        </CardContent>
        <CardActions>
          <div>
            <Button
              type="button"
              size="small"
              onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
            >
              -
            </Button>
            <Typography>{item.quantity}</Typography>
            <Button
              type="button"
              size="small"
              onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
            >
              +
            </Button>
          </div>
          <Button
            variant="contained"
            type="button"
            color="secondary"
            onClick={() => handleRemoveFromCart(item.id)}
          >
            Remove
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default CartItem;
