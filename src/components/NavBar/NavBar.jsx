import { StyledLogo } from "../Header/Header.styled";
import {
  StyledLogoBox,
  StyledBox,
  StyledItem,
  StyledLink,
  StyledList,
  StyledLogoMobile,
  StyledCol,
} from "./NavBar.styled";
import { Link } from "react-scroll";

export const NavBar = ({ display, toggle }) => {
  return (
    <StyledList display={display}>
      <StyledBox>
        <StyledCol>
          <StyledItem>
            <StyledLink
              onClick={toggle}
              to="trainer"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              Тренер
            </StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink
              onClick={toggle}
              to="format"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              Формат
            </StyledLink>
          </StyledItem>
        </StyledCol>

        <StyledLogoMobile>
          <Link to="hero" spy={true} smooth={true} offset={-200} duration={500}>
            <StyledLogo src="./images/logo/logo.png" alt="" />
          </Link>
        </StyledLogoMobile>

        <StyledCol>
          <StyledItem>
            <StyledLink
              onClick={toggle}
              to="price"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              Тарифи
            </StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink
              onClick={toggle}
              to="reviews"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              Відгуки
            </StyledLink>
          </StyledItem>
        </StyledCol>
      </StyledBox>
    </StyledList>
  );
};
