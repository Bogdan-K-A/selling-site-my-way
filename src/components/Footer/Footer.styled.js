import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;

  padding: 15px 0;
  margin-top: auto;

  background: ${(p) => p.theme.colors.light};
`;

export const StyledLogo = styled.img`
  max-width: 208px;
  max-height: 67px;
`;

export const StyledText = styled.p`
  font-size: ${(p) => p.theme.fontSizes.fs14};

  :first-child {
    font-weight: ${(p) => p.theme.fontWeights.bold};
  }
`;
