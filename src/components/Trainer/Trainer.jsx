import { useState } from "react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/free-mode";
import { MContainer } from "../common/Container/Container";
import { Title } from "../ui-component/Title/Title";
import { imgData } from "./imgData";
import { IngredientItem } from "./IngredientItem";
import {
  StyledBox,
  StyledMainText,
  StyledSwiper,
  IconPosition,
  StyledSwiperSlide,
  StyledItem,
  StyledRow,
  StyledCol,
  StyledSwiperBox,
} from "./Trainer.styled";
import { params } from "./swiperParams";

export const Trainer = () => {
  const [ingredients, setIngredients] = useState(imgData);

  return (
    <MContainer>
      <StyledBox>
        <motion.div>
          <Title margin="0 0 20px 0 ">
            Хто приведе вас до результату <br />
          </Title>
        </motion.div>

        <StyledMainText margin="10px">
          Провідний спеціаліст у світі олімпійської легкої атлетики з понад
          двадцятирічним досвідом тренер, <span>Басенко Сергій</span>.
        </StyledMainText>

        <StyledMainText>
          Мої учні являються призерами Олімпійських ігор, Чемпіонатів Світу та
          Чемпіонатів Европи.
        </StyledMainText>
      </StyledBox>

      <StyledRow>
        <StyledCol>
          <StyledItem>
            <img src="../images/students/img-7.png" alt="" />
          </StyledItem>
          <StyledItem>
            <img src="../images/students/img-1.png" alt="" />
          </StyledItem>
          <StyledItem>
            <img src="../images/students/img-2.png" alt="" />
          </StyledItem>
          <StyledItem>
            <img src="../images/students/img-3.png" alt="" />
          </StyledItem>
        </StyledCol>

        <StyledCol>
          <StyledItem>
            <img src="../images/students/img-4.png" alt="" />
          </StyledItem>
          <StyledItem>
            <img src="../images/students/img-5.png" alt="" />
          </StyledItem>
          <StyledItem>
            <img src="../images/students/img-6.png" alt="" />
          </StyledItem>
        </StyledCol>
      </StyledRow>

      <StyledSwiperBox style={{ position: "relative" }}>
        <StyledSwiper {...params}>
          {ingredients.map(({ id, src }) => (
            <StyledSwiperSlide key={id}>
              <IngredientItem src={src} />
            </StyledSwiperSlide>
          ))}
        </StyledSwiper>
        <IconPosition>
          <p>Гортай</p>
        </IconPosition>
      </StyledSwiperBox>
    </MContainer>
  );
};
