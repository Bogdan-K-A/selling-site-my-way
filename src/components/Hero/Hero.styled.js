import styled from "styled-components";
import { Box } from "@mui/system";
import { motion } from "framer-motion";

export const StyledHero = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 850px;
  padding: 100px 0;
  margin: 60px 0 0 0;
  background: url("/images/hero/image2.jpg") no-repeat top/cover;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 991px) {
    height: 700px;
    padding: 40px 0 0 0;
  }
`;

export const StyledBox = styled(Box)`
  position: relative;
  display: flex;
  justify-content: space-between;
  z-index: 9;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 92px;

  @media (max-width: 991px) {
    margin-top: 0;
    margin-bottom: 40px;
  }
`;

export const StyledTitle = styled(motion.h1)`
  font-size: ${(p) => p.theme.fontSizes.fs84};
  font-weight: ${(p) => p.theme.fontWeights.black};
  color: ${(p) => p.theme.colors.white};

  margin-bottom: 20px;

  @media (max-width: 991px) {
    font-size: ${(p) => p.theme.fontSizes.fs64};
  }
  @media (max-width: 555px) {
    font-size: ${(p) => p.theme.fontSizes.fs36};
    margin-bottom: 115px;
  }
`;

export const StyledText = styled(motion.p)`
  font-size: ${(p) => p.theme.fontSizes.fs24};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  color: ${(p) => p.theme.colors.white};
  margin-bottom: 20px;

  @media (max-width: 555px) {
    font-size: ${(p) => p.theme.fontSizes.fs18};
  }
`;
