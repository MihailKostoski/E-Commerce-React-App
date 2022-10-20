import React from "react";
import { Grid } from "@mui/material";
import Product from "./Product/Product";
const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes",
    price: "$5",
    img: "",
  },
  { id: 2, name: "T-shirt", description: "Summer T-shirt", price: "$8" },
];

const Products = () => {
  return (
    <main sx={{ flexGrow: 1 }}>
      <Grid
        sx={{ marginTop: 10 }}
        container
        spacing={4}
        justifyContent="center"
      >
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
