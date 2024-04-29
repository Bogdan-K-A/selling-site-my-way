import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Container } from "../common/Container/Container.jsx";
import { MobileMenu } from "./MobileMenu/MobileMenu.jsx";
import { bodyOveflow } from "../../utils/bodyOveflow";
import { NavBar } from "../NavBar/NavBar.jsx";

import {
  DropMenuWrapper,
  NavWrapper,
  StyledBox,
  StyledHeader,
  StyledLogo,
} from "./Header.styled";
import { Link } from "react-scroll";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((isOpen) => !isOpen);
    bodyOveflow(isOpen);
  };

  return (
    <StyledHeader>
      <Container>
        <StyledBox>
          <NavWrapper>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
            >
              <StyledLogo src="./images/logo/logo.png" alt="" />
            </Link>
            <NavBar display="none" />
            {isOpen ? (
              <MobileMenu isOpen={isOpen} toggle={toggle} />
            ) : (
              <DropMenuWrapper>
                <AiOutlineMenu size={"2em"} onClick={toggle} />
              </DropMenuWrapper>
            )}
          </NavWrapper>
        </StyledBox>
      </Container>
    </StyledHeader>
  );
};
