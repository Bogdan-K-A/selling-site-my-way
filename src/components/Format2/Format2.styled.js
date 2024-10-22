import styled from "styled-components";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { FaTelegramPlane } from "react-icons/fa";

export const TitleBox = styled(motion.div)`
  text-align: center;
  margin-bottom: 20px;

  p {
    line-height: 1.5;
  }
`;

export const StyledBox = styled(motion(Box))`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  border-radius: 30px;
  border: 2px solid ${(p) => p.theme.colors.prymaryBtnColor};
  box-shadow: 0px 0px 25px -5px ${(p) => p.theme.colors.prymaryBtnColor};

  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledImg = styled(motion.img)`
  width: 380px;
  height: 100%;
`;

export const ContentWrapper = styled(motion.div)`
  padding: 20px;
`;

export const StyledItem = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  font-size: ${(p) => p.theme.fontSizes.fs16};

  :not(:last-child) {
    margin-bottom: 10px;
  }

  p > span {
    font-weight: ${(p) => p.theme.fontWeights.semiBold};
  }
`;

export const StyledBoxIcon = styled(motion.div)`
  display: flex;
  flex-direction: center;
  align-items: center;
  width: 20px;
  height: 20px;
  margin: 4px 20px 0 0;
  border-radius: 50%;
  background: green;

  svg {
    width: 20px;
    height: 100%;
    fill: white;
  }
`;

export const StyledBottomText = styled(motion.div)`
  margin: 20px auto 0 auto;
  text-align: center;
  max-width: 900px;
`;

export const StiledIconTg = styled(FaTelegramPlane)`
  margin: auto 0 auto 15px;
  width: 25px;
  height: 25px;

  fill: #35a9da;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;

  @media (max-width: 555px) {
    flex-direction: column;
    align-items: center;
    a {
      margin-bottom: 15px;
    }
  }
`;
