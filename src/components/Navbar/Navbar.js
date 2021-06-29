import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, User, NavWrap, Logo, Cart, MobileIcon } from "./Styles";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { FaTimes, FaBars } from "react-icons/fa";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <Nav>
      <User href="account">
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <AiOutlineUser />
      </User>
      <Logo to="/" />
      <NavWrap>
        <Cart href="cart">
          <AiOutlineShoppingCart />
        </Cart>
      </NavWrap>
    </Nav>
  );
}
