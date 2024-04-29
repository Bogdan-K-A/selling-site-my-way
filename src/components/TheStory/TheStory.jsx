import { MContainer } from "../common/Container/Container";
import { Title } from "../ui-component/Title/Title";
import { animationImg, animationLeft } from "../../animate/animate";

import {
  StyledImg,
  ContentWrapper,
  StyledBox,
  StyledItem,
} from "./TheStory.styled";

export const TheStory = () => {
  return (
    <MContainer
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <StyledBox>
        <StyledImg
          variants={animationLeft}
          src="../images/for-whom/img-7.webp"
          alt=""
        />

        <ContentWrapper>
          <Title margin="0 0 40px">ЗА 14 ДНІВ КУРСУ ТИ:</Title>
          <ul>
            <StyledItem custom={1} variants={animationImg}>
              <img src="./images/logo/circle1.svg" alt="" />
              <p>
                Оволодієш технікою бігу, щоб максимально ефективно
                використовувати потенціал свого тіла.
              </p>
            </StyledItem>
            <StyledItem custom={2} variants={animationImg}>
              <img src="./images/logo/circle1.svg" alt="" />
              <p>
                Отримаєш рекомендації щодо харчування та тренувального режиму
                для досягнення максимальних результатів.
              </p>
            </StyledItem>
            <StyledItem custom={3} variants={animationImg}>
              <img src="./images/logo/circle1.svg" alt="" />
              <p>
                Збільшиш свою витривалість та швидкість, отримаєш тіло своєї
                мрії та покращиш свою фізичну форму.
              </p>
            </StyledItem>
            <StyledItem custom={4} variants={animationImg}>
              <img src="./images/logo/circle1.svg" alt="" />
              <p>Гарантовано отримаєш до 45 км бігового об’єму.</p>
            </StyledItem>
            <StyledItem custom={5} variants={animationImg}>
              <img src="./images/logo/circle1.svg" alt="" />
              <p>
                Приєднаєшся до нашої спільноти бігунів, отримаєш підтримку та
                мотивацію від однодумців.
              </p>
            </StyledItem>
            <StyledItem custom={6} variants={animationImg}>
              <img src="./images/logo/circle1.svg" alt="" />
              <p>Отримаєш постійну знижку на наступні курси.</p>
            </StyledItem>
          </ul>
        </ContentWrapper>
      </StyledBox>
    </MContainer>
  );
};
