import { NavBar } from "../../NavBar/NavBar";
import { GrClose } from "react-icons/gr";
import {
  ButtonClosePosition,
  FlexBox,
  FlexBoxIcons,
  StyledDropMenu,
  StyledInst,
  StyledLogoBox,
  StyledTg,
  StyledTgLink,
} from "./MobileMenu.styled";
import { animation } from "./animateBurgerMenu";
import { Link } from "react-scroll";
import { StyledLogo } from "../Header.styled";
import { BsTelegram, BsInstagram } from "react-icons/bs";

export const MobileMenu = ({ toggle }) => {
  return (
    <StyledDropMenu initial="hidden" animate="visible" variants={animation}>
      <StyledLogoBox>
        <Link to="hero" spy={true} smooth={true} offset={-200} duration={500}>
          <StyledLogo src="./images/logo/logo.png" alt="" />
        </Link>
      </StyledLogoBox>
      <ButtonClosePosition>
        <GrClose onClick={toggle} size="34px" />
      </ButtonClosePosition>

      <FlexBox>
        <NavBar toggle={toggle} />

        <FlexBoxIcons>
          <StyledTg href="">
            <BsTelegram size={30} />
          </StyledTg>
          <StyledInst href="">
            <BsInstagram size={30} />
          </StyledInst>
        </FlexBoxIcons>
      </FlexBox>
    </StyledDropMenu>
  );
};
