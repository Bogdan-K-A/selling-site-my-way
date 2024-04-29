import { Box } from "@mui/material";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

export const StyledMainText = styled(motion.p)`
  font-size: ${(p) => p.theme.fontSizes.fs24};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  margin-bottom: ${({ margin }) => margin || ""};

  @media (max-width: 991px) {
    font-size: ${(p) => p.theme.fontSizes.fs18};
  }
`;

export const StyledBox = styled(Box)`
  text-align: center;
  margin: 0 auto 50px;
`;

export const StyledSwiper = styled(Swiper)`
  position: relative;
  max-width: 1100px;
  /* height: 250px; */
  margin: 0 auto 50px;

  @media (max-width: 1120px) {
    max-width: 900px;
  }
  @media (max-width: 991px) {
    max-width: 520px;
  }

  @media (max-width: 560px) {
    width: 80vw;
  }

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    content: "";
    width: 150px;
    height: 100%;

    background: ${(p) => p.theme.whiteShadowRight};
    z-index: 99;
    @media (max-width: 825px) {
      width: 100px;
    }
    @media (max-width: 560px) {
      display: none;
    }
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 150px;
    height: 100%;

    background: ${(p) => p.theme.whiteShadowLeft};
    z-index: 99;

    @media (max-width: 825px) {
      width: 100px;
    }
    @media (max-width: 560px) {
      display: none;
    }
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  margin-bottom: 10px;
  @media (max-width: 991px) and (min-width: 561px) {
    transform: translate3d(-123px, 0px, 0px) !important;
  }
`;

export const IconPosition = styled(motion.div)`
  font-weight: ${(p) => p.theme.fontWeights.bold};
  position: absolute;
  bottom: -35px;
  left: 50%;

  transform: translate(-50%);
  z-index: 99999;
`;
