import { motion } from "framer-motion";
import { Container } from "../common/Container/Container";
import { Button } from "../ui-component/Button/Button";
import { animation } from "../../animate/animate";
import {
  StyledHero,
  StyledText,
  StyledTitle,
  ContentWrapper,
  StyledBox,
} from "./Hero.styled";

export const Hero = () => {
  return (
    <StyledHero
      id="hero"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Container>
        <StyledBox>
          <ContentWrapper>
            <StyledTitle custom={1} variants={animation}>
              Бігом у Травень!
            </StyledTitle>
            <StyledText custom={2} variants={animation}>
              Виходь на новий рівень тренувань разом з нами!
            </StyledText>
            <StyledText custom={2} variants={animation}>
              <span>6 травня </span>
              стартують 14 бігові курси, <br />
              які змінять твій погляд на тренування!
            </StyledText>

            <motion.div
              custom={3}
              variants={animation}
              style={{ marginTop: "50px" }}
            >
              <Button
                to="format"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
                padding="8px 26px"
                bgcolor="bgcolor"
              >
                Як це працює
              </Button>
            </motion.div>
          </ContentWrapper>
        </StyledBox>
      </Container>
    </StyledHero>
  );
};
