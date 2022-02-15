import React from "react";

// styles
import { StyledNavContainer } from "./navbar.styles";

// components
import Logo from "../../constants/logo/logo.component";

const Navbar = () => {
  return (
    <StyledNavContainer>
      <Logo />
    </StyledNavContainer>
  );
};

export default Navbar;
