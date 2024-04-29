import { MContainer } from "../common/Container/Container";
import { motion } from "framer-motion";
import { Button } from "../ui-component/Button/Button";
import {
  animationBurgers,
  animationImg,
  animationLeft,
} from "../../animate/animate";
import { StyledBoxText, StyledImg, StyledText } from "../About/About.styled";

export const About = () => {
  return (
    <MContainer
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <StyledBoxText>
        <StyledText>
          <motion.p custom={1} variants={animationLeft}>
            <b>Фінішер 2 топових марафонів в світі</b>. Берлінський 2023 рік та
            Лондонський 2024 Засновник проекту Ocean Run в Португалії Автор
            бігових аудіо тренувань, які тебе чекають на даному тренінгу.
          </motion.p>
          <motion.p custom={2} variants={animationLeft}>
            <b>Попереду - мій онлайн курс з бігу.</b> Цей курс розроблений таким
            чином, щоб навчити вас бігати з нуля, навіть якщо ви ніколи раніше
            цим не займалися.
          </motion.p>
          <motion.p custom={3} variants={animationLeft}>
            <b>Але це ще не все</b> - навіть якщо ви вже маєте певний досвід у
            біговій сфері, мій курс дозволить вам <b>покращити свої навички</b>{" "}
            та досягти нових результатів. А якщо ви забули про біг через
            перерву… Не проблема!
          </motion.p>
          <motion.p custom={4} variants={animationLeft}>
            Я <b>допоможу повернутися на трек</b> і поновити свій біговий ритм.
            Кожне тренування, яке ви знайдете в моїх курсах, <b>ретельно </b>
            спроєктоване бути <b>доступним і корисним</b> для будь-кого, хто має
            бажання покращити свої бігові навички та досягти нових висот у своїх
            заняттях.
          </motion.p>
          <motion.p custom={6} variants={animationLeft}>
            <b>
              Приєднуйтесь до мого курсу просто зараз аби відчути різницю в
              своєму біговому досвіді!
            </b>
          </motion.p>
        </StyledText>

        <StyledImg
          custom={4}
          variants={animationImg}
          src="./images/trainer/img-4.png"
          alt=""
        />
      </StyledBoxText>
      <motion.div
        custom={8}
        variants={animationBurgers}
        style={{ textAlign: "center", marginTop: "25px" }}
      >
        <Button
          to="price"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
          padding="8px 26px"
          bgcolor="bgcolor"
        >
          Придбати курс
        </Button>
      </motion.div>
    </MContainer>
  );
};
