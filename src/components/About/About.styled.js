import styled from "styled-components";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

export const StyledBoxText = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  @media (min-width: 993px) {
    justify-content: space-evenly;
  }
`;

export const StyledText = styled(motion.div)`
  max-width: 600px;
  font-size: ${(p) => p.theme.fontSizes.fs16};

  p:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const StyledImg = styled(motion.img)`
  width: 200px;
  display: none;

  @media (min-width: 993px) {
    display: block;
  }
`;
