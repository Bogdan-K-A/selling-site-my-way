import { MContainer } from "../common/Container/Container";
import { Title } from "../ui-component/Title/Title";
import {
  StyledImg,
  ContentWrapper,
  StyledBox,
  StyledItem,
  TitleBox,
  StyledBoxIcon,
  StyledBottomText,
  StiledIconTg,
  ButtonBox,
} from "./Format2.styled";
import { IoIosCheckmark } from "react-icons/io";
import { StiledButtonLink } from "../ui-component/Button/Button.styled";
import { Button } from "../ui-component/Button/Button";

export const Format2 = () => {
  return (
    <MContainer>
      <TitleBox>
        <Title margin="0 0 20px 0">Вітаємо, сміливцю!</Title>
        <p>
          Ласкаво просимо до нашого унікального курсу підготовки до півмарафону!{" "}
          <br />
          Якщо ти обрав(ла) цей курс, це свідчить про те, що ти не лише
          подолав(ла) забіги на 5 та 10 км, але й готовий(а) стати справжнім
          напівмарафонцем.
        </p>
        <p>
          Це захоплююча подорож, де ти дізнаєшся більше про своє тіло, дух і
          силу волі.
        </p>
        <p>
          <b>Курс, який ми розробили, триває 8 тижнів. На курсі ти отримаєш:</b>
        </p>
      </TitleBox>
      <StyledBox>
        <StyledImg src="./images/my_way_21km.png" alt="" />

        <ContentWrapper>
          <Title margin="0 0 20px">My Way 21 км Підготовка 8 тижнів</Title>
          <ul>
            <StyledItem>
              <StyledBoxIcon>
                <IoIosCheckmark />
              </StyledBoxIcon>

              <p>
                <span>
                  <em>
                    32 Детально розписаних бігових тренування, що будуються за
                    принципом:
                  </em>
                </span>{" "}
                два тижні інтенсивних занять, а потім тиждень легших тренувань.
              </p>
            </StyledItem>
            <StyledItem>
              <StyledBoxIcon>
                <IoIosCheckmark />
              </StyledBoxIcon>

              <p>
                <span>
                  <em>4 Відео Спеціально Бігових Вправ</em>
                </span>{" "}
              </p>
            </StyledItem>
            <StyledItem>
              <StyledBoxIcon>
                <IoIosCheckmark />
              </StyledBoxIcon>

              <p>
                <span>
                  <em>4 Відео силових вправ</em>
                </span>{" "}
                , а також розбір техніки виконання складних рухів.
              </p>
            </StyledItem>
            <StyledItem>
              <StyledBoxIcon>
                <IoIosCheckmark />
              </StyledBoxIcon>

              <p>
                <span>
                  <em>
                    4 Відео тренування з Мобіліті (гнучкість та рухливість
                    суглобів)
                  </em>
                </span>
              </p>
            </StyledItem>
            <StyledItem>
              <StyledBoxIcon>
                <IoIosCheckmark />
              </StyledBoxIcon>

              <p>
                <span>
                  <em>Підбірка корисних рекомендацій:</em>
                </span>{" "}
                від правильного вибору спортивного одягу та взуття до обрання
                найкращих гаджетів та додатків для максимально ефективного
                моніторингу твоїх спортивних досягнень.
              </p>
            </StyledItem>
            <StyledItem>
              <StyledBoxIcon>
                <IoIosCheckmark />
              </StyledBoxIcon>

              <p>
                <span>
                  <em>Настанови від тренера з харчування</em>
                </span>
                , водного режиму, та методики відновлення після тренувань.
              </p>
            </StyledItem>
          </ul>
        </ContentWrapper>
      </StyledBox>

      <StyledBottomText>
        <p>
          <b>
            {" "}
            Ми тут, щоб допомогти тобі в кожному етапі цього захоплюючого
            виклику. Бери великий ковток повітря, зав’яжи кросівки та погнали до
            нових вершин!
          </b>
        </p>
        <p>
          Бажаємо натхнення та впертості у твоєму біговому підкоренні
          півмарафонської дистанції!
        </p>
        <ButtonBox>
          <StiledButtonLink
            href="https://t.me/baskarabas"
            padding="9px 32px"
            bgcolor="bgcolor"
          >
            <div style={{ display: "flex" }}>
              Чат підтримка
              <StiledIconTg />
            </div>
          </StiledButtonLink>
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
        </ButtonBox>
      </StyledBottomText>
    </MContainer>
  );
};
