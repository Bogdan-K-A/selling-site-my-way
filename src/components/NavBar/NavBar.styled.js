import styled from "styled-components";
import { Link } from "react-scroll";
import { Box } from "@mui/material";

export const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 991px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const StyledCol = styled.div`
  display: flex;

  @media (max-width: 991px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const StyledList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 991px) {
    display: ${({ display }) => display || ""};
    margin-top: 100px;
  }
`;

export const StyledItem = styled.li`
  color: ${(p) => p.theme.colors.white};

  .active {
    color: ${(p) => p.theme.colors.prymaryBtnColor};
    transition: 0.3s ease;
  }

  &:not(:last-child) {
    margin-right: 70px;
  }

  /* @media (max-width: 1100px) {
    &:not(:last-child) {
      margin-right: 30px;
    }
  } */

  @media (max-width: 991px) {
    padding: 0;
    margin-bottom: 30px;
    color: ${(p) => p.theme.colors.text};
    &:not(:last-child) {
      margin-right: 0;
    }
  }
`;

export const StyledLink = styled(Link)`
  padding: 20px 0;
  text-transform: uppercase;
  cursor: pointer;

  font-weight: ${(p) => p.theme.fontWeights.bold};

  :hover,
  :focus {
    color: ${(p) => p.theme.colors.prymaryBtnColor};
    transition: 0.3s ease;
  }

  @media (max-width: 991px) {
    padding: 0;
    font-size: ${(p) => p.theme.fontSizes.fs28};
  }
`;

export const StyledLogoMobile = styled.div`
  display: block;
  margin: 0 100px;
  @media (max-width: 991px) {
    display: none;
  }
`;
