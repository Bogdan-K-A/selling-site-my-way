import styled from "styled-components";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

export const StyledBox = styled(Box)`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledImg = styled(motion.img)`
  width: 441px;
  height: 620px;
  border-radius: 26px;
  margin-bottom: 0;

  @media (max-width: 991px) {
    margin-bottom: 25px;
    max-width: 100%;
    height: 100%;
  }
`;

export const ContentWrapper = styled(motion.div)`
  max-width: 800px;
  margin-left: 50px;

  @media (max-width: 1080px) {
    margin-left: 0;
    margin-bottom: 30px;
  }
`;

export const StyledItem = styled(motion.li)`
  display: flex;
  font-size: ${(p) => p.theme.fontSizes.fs24};

  :not(:last-child) {
    margin-bottom: 30px;
  }

  img {
    width: 20px;
    height: 20px;
    margin: 10px 10px 0 0;
  }

  @media (max-width: 991px) {
    img {
      margin: 3px 10px 0 0;
    }

    font-size: ${(p) => p.theme.fontSizes.fs18};
  }
`;
