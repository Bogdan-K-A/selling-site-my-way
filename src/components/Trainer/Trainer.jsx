import { useState } from "react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/free-mode";
import { MContainer } from "../common/Container/Container";
import { Title } from "../ui-component/Title/Title";
import { imgData } from "./imgData";
import { IngredientItem } from "./IngredientItem";
import { animationLeft, animationRight } from "../../animate/animate";
import {
  StyledBox,
  StyledMainText,
  StyledSwiper,
  IconPosition,
  StyledSwiperSlide,
} from "./Trainer.styled";
import { params } from "./swiperParams";

export const Trainer = () => {
  const [ingredients, setIngredients] = useState(imgData);

  return (
    <MContainer
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.4, once: true }}
    >
      <StyledBox>
        <motion.div custom={1} variants={animationLeft}>
          <Title margin="0 0 20px 0 ">Твій тренер Басенко Сергій</Title>
        </motion.div>

        <StyledMainText margin="10px" custom={2} variants={animationRight}>
          Провідний спеціаліст у світі олімпійської легкої атлетики з понад
          двадцятирічним досвідом.
        </StyledMainText>

        <StyledMainText custom={5} variants={animationRight}>
          Мої учні являються призерами Олімпійських ігор, Чемпіонатів Світу та
          Чемпіонатів Европи.
        </StyledMainText>
      </StyledBox>

      <motion.div
        custom={6}
        variants={animationLeft}
        style={{ position: "relative" }}
      >
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
      </motion.div>
    </MContainer>
  );
};
