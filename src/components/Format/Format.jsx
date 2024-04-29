import { MContainer } from "../common/Container/Container";
import { Title } from "../ui-component/Title/Title";
import { animation, animationImg } from "../../animate/animate";
import {
  StyledImg,
  ContentWrapper,
  StyledBox,
  StyledItem,
} from "./Format.styled";

export const Format = () => {
  return (
    <MContainer
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <StyledBox>
        <ContentWrapper>
          <Title margin="0 0 30px">ФОРМАТ КУРСУ</Title>
          <ul>
            <StyledItem custom={1} variants={animation}>
              <img src="./images/logo/circle1.svg" alt="" />
              <p>
                14 днів тренувань, які піднімуть твою витривалість і швидкість
                на новий рівень.
              </p>
            </StyledItem>
            <StyledItem custom={2} variants={animation}>
              <img src="./images/logo/circle1.svg" alt="" />
              <p>
                14 днів доступу до контенту та чату підтримки для постійного
                підтримання і мотивації.
              </p>
            </StyledItem>
            <StyledItem custom={3} variants={animation}>
              <img src="./images/logo/circle1.svg" alt="" />
              <p>
                8 бігових онлайн тренувань, спрямованих на підвищення
                витривалості, швидкості та формування рельєфу тіла. Всі
                тренування проводить тренер онлайн та зберігається запис.
              </p>
            </StyledItem>
            <StyledItem custom={4} variants={animation}>
              <img src="./images/logo/circle1.svg" alt="" />
              <p>2 відновлюючі йога-сесії з дипломованим йога тренером.</p>
            </StyledItem>
            <StyledItem custom={5} variants={animation}>
              <img src="./images/logo/circle1.svg" alt="" />
              <p>
                4 тренування з мобільності в суглобах, що дадуть гнучкість
                суглобам та знімуть напругу в тілі.
              </p>
            </StyledItem>
            <StyledItem custom={6} variants={animation}>
              <img src="./images/logo/circle1.svg" alt="" />
              <p>
                2 блоки силових вправ для зміцнення м’язів та підвищення
                стійкості.
              </p>
            </StyledItem>
            <StyledItem custom={6} variants={animation}>
              <img src="./images/logo/circle1.svg" alt="" />
              <p>
                2 спеціалізовані блоки вправ для поліпшення техніки бігу та
                досягнення максимально швидких змін у техніці бігу.
              </p>
            </StyledItem>
          </ul>
        </ContentWrapper>

        <StyledImg
          variants={animationImg}
          src="../images/for-whom/img-12.webp"
          alt=""
        />
      </StyledBox>
    </MContainer>
  );
};
