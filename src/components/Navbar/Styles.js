import styled from "styled-components";
import LogoSrc from "../../assets/kmaker2.png";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  height: 110px;
  width: 100%;
  padding: 0 30px;
  background-color: white;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  font-size: 20px;
  position: fixed;
  top: 0;
  z-index: 1;
  text-decoration: none;
`;

export const User = styled.a`
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
`;

export const Signin = styled.button`
  font-size: 0.75em;
  margin: 0.5em;
  padding: 0.25em 0.75em;
  border: 2px solid;
  border-radius: 3px;
`;

export const Signup = styled.button`
  font-size: 0.75em;
  margin: 0.5em;
  padding: 0.25em 0.75em;
  border: 2px solid;
  border-radius: 3px;
`;

export const NavWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img.attrs({
  src: `${LogoSrc}`,
})`
  width: 9em;
  height: 9em;
`;

export const Cart = styled.a`
  padding: 1em;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: block;

  @media screen and (max-width: 480px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
