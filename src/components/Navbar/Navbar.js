import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Badge,
  IconButton,
} from "@material-ui/core";
import { MenuIcon, ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/kmaker2.png";
import useStyles from "./Styles";

export default function Navbar() {
  const classes = useStyles();

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src={logo}
              alt="Kmaker"
              height="25px"
              className={classes.images}
            />
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
