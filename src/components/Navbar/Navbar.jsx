import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Badge,
  IconButton,
} from "@material-ui/core";
import { Menu, ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from 'react-router-dom'
import logo from "../../assets/kmaker2.png";
import useStyles from "./styles";

export default function Navbar({ totalItems }) {
  const classes = useStyles();
  const location = useLocation()


  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <div>
            <IconButton aria-label="Show menu items" color="inherit">
              <Menu />
            </IconButton>
          </div>
          <div className={classes.grow} />
          <Typography component={Link} to='/' variant="h6" className={classes.title} color="inherit">
            <img
              src={logo}
              alt="Kmaker"
              height="110px"
              width="110px"
              className={classes.image}
            />
          </Typography>
          {location.pathname === '/' && (
          <div className={classes.button}>
            <IconButton component={Link} to='/cart' aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div> )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
