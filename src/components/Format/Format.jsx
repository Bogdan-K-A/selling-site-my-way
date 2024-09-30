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
} from "./Format.styled";
import { IoIosCheckmark } from "react-icons/io";
import { StiledButtonLink } from "../ui-component/Button/Button.styled";
import { Button } from "../ui-component/Button/Button";

export const Format = () => {
  return (
    <MContainer>
      <TitleBox>
        <p>
          Готуйся до свого найкращого забігу на 10 км з <b>My Way 10 км</b>{" "}
          Підготовка протягом 5 тижнів!
        </p>
        <p>
          Чи ти збираєшся фінішувати чи покращити свій попередній результат, наш
          курс допоможе тобі досягти твоїх цілей!
        </p>
        <Title margin="20px 0 20px">
          Під час 5-ти тижневого курсу ти отримаєш:
        </Title>
      </TitleBox>
      <StyledBox>
        <ContentWrapper>
          <Title margin="0 0 20px">My Way 10 км Підготовка 5 тижнів</Title>
          <ul>
            <StyledItem>
              <StyledBoxIcon>
                <IoIosCheckmark />
              </StyledBoxIcon>

              <p>
                <span>
                  <em>20 бігових тренувань</em>
                </span>
                , що допоможуть підготувати твоє тіло до інтенсивного забігу.
              </p>
            </StyledItem>
            <StyledItem>
              <StyledBoxIcon>
                <IoIosCheckmark />
              </StyledBoxIcon>

              <p>
                <span>
                  <em>5 вебінарів з тренером</em>
                </span>
                , де отримаєш професійні поради та відповіді на всі свої
                запитання.
              </p>
            </StyledItem>
            <StyledItem>
              <StyledBoxIcon>
                <IoIosCheckmark />
              </StyledBoxIcon>

              <p>
                <span>
                  <em>10 тренувань з мобіліті </em>
                </span>
                для підтримки гнучкості та попередження травм.
              </p>
            </StyledItem>
            <StyledItem>
              <StyledBoxIcon>
                <IoIosCheckmark />
              </StyledBoxIcon>

              <p>
                <span>
                  <em>5 тренувань з йоги </em>
                </span>
                для збалансування і розслаблення м'язів.
              </p>
            </StyledItem>
            <StyledItem>
              <StyledBoxIcon>
                <IoIosCheckmark />
              </StyledBoxIcon>

              <p>
                <span>
                  <em>5 блоків Спеціальних Бігових Вправ </em>
                </span>
                для підвищення ефективності та швидкості.
              </p>
            </StyledItem>
            <StyledItem>
              <StyledBoxIcon>
                <IoIosCheckmark />
              </StyledBoxIcon>

              <p>
                <span>
                  <em>5 блоків Силових Вправ </em>
                </span>
                для зміцнення м'язів та підвищення витривалості.
              </p>
            </StyledItem>
          </ul>
        </ContentWrapper>
        <StyledImg src="./images/my_way_10km.png" alt="" />
      </StyledBox>

      <StyledBottomText>
        <p>
          <b> Не втрачай можливості стати кращою версією себе!</b>
        </p>
        <p>
          Приєднуйся до My Way 10 км Підготовка та підготуйся до найкращого
          забігу свого життя!
        </p>
        <ButtonBox>
          <StiledButtonLink href="" padding="9px 32px" bgcolor="bgcolor">
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
