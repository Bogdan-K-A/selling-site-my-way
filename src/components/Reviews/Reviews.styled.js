import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const StyledSwiperList = styled(Swiper)`
  margin: 0 auto;
  width: 100%;
  height: auto;
`;

export const StyledSwiperItem = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledItemContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  max-width: 400px;
  min-height: 560px;
  padding: 30px;
  margin: 8px;

  background: ${(p) => p.theme.colors.white};
  box-shadow: ${(p) => p.theme.shadow};
  border-radius: ${(p) => p.theme.radii.r26};
`;

export const StyledTitle = styled.h3`
  margin-bottom: 20px;
`;

export const StyledText = styled.p`
  margin-bottom: 20px;
`;

export const StyledName = styled.div`
  margin: 20px 0 0 auto;
  color: ${(p) => p.theme.colors.prymaryBtnColor};
  font-weight: ${(p) => p.theme.fontWeights.bold};
`;
