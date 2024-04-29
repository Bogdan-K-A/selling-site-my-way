import { NavBar } from "../../NavBar/NavBar";
import { GrClose } from "react-icons/gr";
import { ButtonClosePosition, StyledDropMenu } from "./MobileMenu.styled";
import { animation } from "./animateBurgerMenu";

export const MobileMenu = ({ toggle }) => {
  return (
    <StyledDropMenu initial="hidden" animate="visible" variants={animation}>
      <ButtonClosePosition>
        <GrClose onClick={toggle} size="34px" />
      </ButtonClosePosition>

      <NavBar toggle={toggle} />
    </StyledDropMenu>
  );
};
