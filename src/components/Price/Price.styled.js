import styled from "styled-components";
import { Box } from "@mui/system";
import { motion } from "framer-motion";

export const StyledList = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 993px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledItem = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  width: 440px;
  padding: 20px;

  background: ${(p) => p.theme.colors.white};
  box-shadow: ${(p) => p.theme.shadow};
  border-radius: ${(p) => p.theme.radii.r26};

  @media (max-width: 1075px) {
    margin-bottom: 30px;
  }

  @media (max-width: 568px) {
    width: 100%;
    height: 100%;
  }
`;

export const StyledBoxItem = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

export const TitleCardMargin = styled.h3`
  margin-bottom: 15px;
`;

export const StyledPrice = styled.p`
  color: ${(p) => p.theme.colors.prymaryBtnColor};
  font-size: ${(p) => p.theme.fontSizes.fs24};
  font-weight: ${(p) => p.theme.fontWeights.extraBold};
`;

export const StyledContentList = styled.ul`
  li {
    font-size: ${(p) => p.theme.fontSizes.fs16};
  }
  li:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const BonusBox = styled.div`
  margin-top: 80px;
  font-size: ${(p) => p.theme.fontSizes.fs16};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
`;
