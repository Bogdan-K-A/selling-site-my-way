import styled from "styled-components";
import { Link } from "react-scroll";

//если использовать react-scroll тогда вставить вместо а (Link)

export const StyledButton = styled(Link)`
  display: inline-block;
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};

  background-color: ${({ bgcolor, theme }) =>
    bgcolor
      ? `${theme.colors.secondaryBtnColor}`
      : `${theme.colors.prymaryBtnColor}`};

  font-size: ${(p) => p.theme.fontSizes.fs18};
  font-weight: ${(p) => p.theme.fontWeights.bold};

  border-radius: ${(p) => p.theme.radii.r20};

  cursor: pointer;
  transition: 0.3s ease;

  &:hover,
  &:focus {
    box-shadow: ${(p) => p.theme.shadowBtn};
    font-size: ${(p) => p.theme.fontSizes.fs19};
    transition: 0.3s ease;
  }

  @media (max-width: 991px) {
    display: ${({ display }) => display || ""};
  }
`;

export const StiledButtonLink = styled(StyledButton).attrs({ as: "a" })``;
