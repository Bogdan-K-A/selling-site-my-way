import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Container } from "../common/Container/Container.jsx";
import { MobileMenu } from "./MobileMenu/MobileMenu.jsx";
import { bodyOveflow } from "../../utils/bodyOveflow";
import { NavBar } from "../NavBar/NavBar.jsx";

import {
  DropMenuWrapper,
  NavWrapper,
  StyledHeader,
  FlexBoxIcons,
} from "./Header.styled";
import { StyledInst, StyledTg } from "./MobileMenu/MobileMenu.styled.js";
import { BsInstagram, BsTelegram } from "react-icons/bs";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((isOpen) => !isOpen);
    bodyOveflow(isOpen);
  };

  return (
    <StyledHeader>
      <Container>
        <NavWrapper>
          <NavBar display="none" />

          <FlexBoxIcons>
            <StyledTg href="">
              <BsTelegram size={30} />
            </StyledTg>
            <StyledInst href="">
              <BsInstagram size={30} />
            </StyledInst>
          </FlexBoxIcons>

          {isOpen ? (
            <MobileMenu isOpen={isOpen} toggle={toggle} />
          ) : (
            <DropMenuWrapper>
              <AiOutlineMenu size={"2em"} onClick={toggle} />
            </DropMenuWrapper>
          )}
        </NavWrapper>
      </Container>
    </StyledHeader>
  );
};
