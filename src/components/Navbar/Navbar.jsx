import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import logo from "../../assets/commerce.png";
function Navbar() {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: "none",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        }}
        color="inherit"
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              alignItems: "center",
              display: "flex",
              textDecoration: "none",
            }}
            color="inherit"
          >
            <img
              src={logo}
              alt="Commerce.js"
              sx={{ marginRight: "10px" }}
              height="25px"
            />
            Commerce.js
          </Typography>
          <div sx={{ flexGrow: 1 }} />

          <IconButton aria-label="Show cart items" color="inherit">
            <Badge badgeContent={2} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
