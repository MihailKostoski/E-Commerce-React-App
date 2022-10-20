import React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Typography from "@mui/material/Typography";

function Product({ product }) {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia
        sx={{ height: 0, paddingTop: "56.25%" }}
        img={product.img}
        tittle={product.name}
      />
      <CardContent>
        <div sx={{ height: 0, paddingTop: "56.25%" }}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">{product.price}</Typography>
          <Typography variant="body2" color="textSecondary">
            {product.description}
          </Typography>
        </div>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <IconButton>
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Product;
