import styled from "styled-components";
import { Box } from "@mui/system";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 0;

  z-index: 99;

  @media (min-width: 991px) {
    position: absolute;
  }
`;

export const NavWrapper = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 991px) {
    justify-content: flex-end;
  }
`;

export const StyledLogo = styled.img`
  max-width: 208px;
  max-height: 67px;
  margin-right: auto;
  cursor: pointer;
`;

export const DropMenuWrapper = styled.div`
  svg {
    fill: ${(p) => p.theme.colors.secondaryBtnColor};
  }
  @media (min-width: 991px) {
    display: none;
  }
`;

export const FlexBoxIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100px;

  @media (max-width: 991px) {
    display: none;
  }
`;
