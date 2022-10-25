import React from "react";
import {
  AppBar,
  ButtonBase,
  Badge,
  Toolbar,
  MenuItem,
  Menu,
  Typography,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import logo from "../../assets/commerce.png";

import { Link, useLocation } from "react-router-dom";

function Navbar({ totalItems }) {
  const location = useLocation();

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
            component={Link}
            to="/"
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

          {location.pathname === "/" && (
            <ButtonBase
              LinkComponent={Link}
              to="/cart"
              aria-label="Show cart items"
              color="inherit"
            >
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </ButtonBase>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
