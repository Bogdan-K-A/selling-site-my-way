import { Container } from "../common/Container/Container";
import { Button } from "../ui-component/Button/Button";
import {
  StyledHero,
  StyledText,
  StyledTitle,
  StyledBox,
  StyledItem,
  StyledPoint,
} from "./Hero.styled";

export const Hero = () => {
  return (
    <StyledHero id="hero" viewport={{ once: true }}>
      <Container>
        <StyledBox>
          <div>
            <StyledTitle>
              Онлайн курс з бігу <span> "My Way"</span>
              <br />
              старт 3 червня
            </StyledTitle>
            <StyledText>
              Готуйся до свого найкращого забігу <br /> обери свою програму
            </StyledText>

            <ul>
              <StyledItem>
                <StyledPoint>
                  <span></span>
                </StyledPoint>
                <p>
                  4 тижні:
                  <br /> Iдеальний старт для новачків у бігу
                </p>
              </StyledItem>
              <StyledItem>
                <StyledPoint>
                  <span></span>
                </StyledPoint>
                <p>
                  10 км 5 тижнів:
                  <br /> Підготовка до подолання 10 км з комфортом
                </p>
              </StyledItem>
              <StyledItem>
                <StyledPoint>
                  <span></span>
                </StyledPoint>
                <p>
                  21 км 8 тижнів:
                  <br /> Підготовка до півмарафонської дистанції
                </p>
              </StyledItem>
            </ul>

            <div style={{ marginTop: "50px" }}>
              <Button
                to="price"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
                padding="8px 26px"
                bgcolor="bgcolor"
              >
                Взяти участь
              </Button>
            </div>
          </div>
        </StyledBox>
      </Container>
    </StyledHero>
  );
};
