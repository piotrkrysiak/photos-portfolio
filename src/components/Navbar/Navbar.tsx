import React, { useState, useEffect } from "react";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Button } from "../globalStyles";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
} from "./Navbar.elements";


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={closeMobileMenu}>
            <StarBorderIcon/>
            DzikieZdjęcia
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <CloseIcon /> : <MenuIcon />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to="/" onClick={closeMobileMenu}>
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/services" onClick={closeMobileMenu}>
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/products" onClick={closeMobileMenu}>
                Products
              </NavLinks>
            </NavItem>
            <NavItemBtn>
              {button ? (
                <NavBtnLink to="/sign-up">
                  <Button primary={true} fontBig={false} big>
                    SIGN UP
                  </Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to="/sign-up">
                  <Button onClick={closeMobileMenu} fontBig primary big={false}>
                    SIGN UP
                  </Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
