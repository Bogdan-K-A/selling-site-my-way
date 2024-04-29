import { StyledBox, StyledItem, StyledLink, StyledList } from "./NavBar.styled";

export const NavBar = ({ display, toggle }) => {
  return (
    <StyledList display={display}>
      <StyledBox>
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
        <StyledItem>
          <StyledLink
            onClick={toggle}
            to="price"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >
            Ціни
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
      </StyledBox>
    </StyledList>
  );
};
