import { Box } from "@mui/material";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

export const StyledMainText = styled(motion.p)`
  font-size: ${(p) => p.theme.fontSizes.fs24};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  margin-bottom: ${({ margin }) => margin || ""};

  span {
    font-weight: ${(p) => p.theme.fontWeights.bold};
    color: ${(p) => p.theme.colors.prymaryBtnColor};
  }

  @media (max-width: 991px) {
    font-size: ${(p) => p.theme.fontSizes.fs18};
  }
`;

export const StyledBox = styled(Box)`
  text-align: center;
  margin: 0 auto 50px;
`;

export const StyledSwiperBox = styled(motion.div)`
  display: none;
  @media (max-width: 991px) {
    display: block;
  }
`;

export const StyledSwiper = styled(Swiper)`
  position: relative;
  max-width: 1100px;
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

  @media (max-width: 991px) {
    div {
      margin: 20px auto;
      border-radius: 50%;
      width: 229px;
      height: 100%;
      box-shadow: 0px 0px 25px -5px #282827;
    }
  }

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

export const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 991px) {
    display: none;
  }
`;

export const StyledCol = styled.ul`
  width: 1080px;
  display: flex;
  justify-content: center;
`;

export const StyledItem = styled(motion.li)`
  box-shadow: 0px 0px 25px -5px #282827;
  border-radius: 50%;
  overflow: hidden;
  width: 180px;
  height: 180px;

  :not(:last-child) {
    margin-right: 80px;
  }

  img {
    width: 200px;
  }
`;
