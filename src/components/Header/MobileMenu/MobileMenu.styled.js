import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledDropMenu = styled(motion.div)`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100vw;
  height: 100vh;
  padding: 30px 0 0 0;
  background: ${(p) => p.theme.colors.white};
  z-index: 1000;
`;

export const ButtonClosePosition = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 80vh;
  justify-content: space-between;

  margin: 0 auto;
`;

export const StyledLogoBox = styled.div`
  display: none;
  @media (max-width: 991px) {
    display: block;
    margin: 0 0 0 25px;
  }
`;

export const StyledTg = styled.a`
  color: #007aff;
`;

export const StyledInst = styled.a`
  color: #da0063;
`;

export const FlexBoxIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;
