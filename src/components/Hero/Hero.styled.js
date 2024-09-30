import styled from "styled-components";
import { Box } from "@mui/system";
import { motion } from "framer-motion";

export const StyledHero = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 100px 0;
  background: url("./images/hero/image61.jpg") no-repeat center/cover;

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
    background: url("./images/hero/image5.jpg") no-repeat center/cover;
  }
`;

export const StyledBox = styled(Box)`
  margin-top: 100px;
  position: relative;
  display: flex;
  justify-content: space-between;
  z-index: 9;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0;
  }
`;

export const StyledTitle = styled(motion.h1)`
  font-size: ${(p) => p.theme.fontSizes.fs28};
  font-weight: ${(p) => p.theme.fontWeights.regular};
  color: ${(p) => p.theme.colors.white};

  margin-bottom: 20px;

  span {
    color: ${(p) => p.theme.colors.prymaryBtnColor};
    font-weight: ${(p) => p.theme.fontWeights.bold};
  }

  @media (max-width: 555px) {
    max-width: 300px;
    margin: 0 auto 50px auto;
  }
`;

export const StyledText = styled(motion.p)`
  font-size: ${(p) => p.theme.fontSizes.fs30};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  color: ${(p) => p.theme.colors.white};
  margin-bottom: 20px;

  @media (max-width: 555px) {
    font-size: ${(p) => p.theme.fontSizes.fs18};
  }
`;

export const StyledItem = styled(motion.li)`
  display: flex;
  font-size: 16;
  font-weight: 300;
  color: ${(p) => p.theme.colors.white};
  margin-bottom: 20px;
  line-height: 1;

  p {
    text-align: left;
  }
`;

export const StyledPoint = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid white;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${(p) => p.theme.colors.secondaryBtnColor};
  }

  @media (max-width: 555px) {
    width: 10px;
    height: 50px;
    border-radius: 0;
    background-color: ${(p) => p.theme.colors.secondaryBtnColor};
    border: none;
  }
`;
