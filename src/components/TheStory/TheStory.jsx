import { MContainer } from "../common/Container/Container";
import { Title } from "../ui-component/Title/Title";
import {
  StyledImg,
  ContentWrapper,
  StyledBox,
  StyledItem,
  StyledBoxIcon,
  TitleBox,
  StiledIconTg,
  StyledBottomText,
  ButtonBox,
} from "./TheStory.styled";
import { IoIosCheckmark } from "react-icons/io";
import { StiledButtonLink } from "../ui-component/Button/Button.styled";
import { Button } from "../ui-component/Button/Button";

export const TheStory = () => {
  return (
    <MContainer>
      <TitleBox>
        <Title margin="0 0 30px">Що тебе чекає на наших курсах:</Title>
        <p>
          Відчуй піднесений стан, пройшовши свій власний шлях до перемоги з{" "}
          <b>My Way 4 тижні!</b>
        </p>
        <p>
          Приготуйся до незабутньої пригоди, де кожен крок наблизить до своїх
          мрій.
        </p>
        <p>
          Наші 4 тижні бігових курсів пропонують не лише виклик, а й справжній
          досвід, який змінить твоє сприйняття бігу та твоє тіло.
        </p>
      </TitleBox>
      <StyledBox>
        <StyledImg src="./images/my_way_30days.png" alt="" />

        <ContentWrapper>
          <Title margin="0 0 20px">My Way 4 тижні</Title>
          <ul>
            <StyledItem>
              <StyledBoxIcon>
                <IoIosCheckmark />
              </StyledBoxIcon>
              <p>
                <span>
                  <em>12 текстових бігових тренувань</em>
                </span>
                , що вкладуться у твій графік і зроблять кожен твій вибіг
                ефективним.
              </p>
            </StyledItem>
            <StyledItem>
              <StyledBoxIcon>
                <IoIosCheckmark />
              </StyledBoxIcon>

              <p>
                <span>
                  <em>4 онлайн бігових тренувань з аудіосупроводом тренера</em>
                </span>
                , які зроблять кожен твій крок напрямленним та мотиваційним.
              </p>
            </StyledItem>
            <StyledItem>
              <StyledBoxIcon>
                <IoIosCheckmark />
              </StyledBoxIcon>

              <p>
                <span>
                  <em>8 тренувань з мобіліті </em>
                </span>
                для підтримки твоєї гнучкості та попередження травм.
              </p>
            </StyledItem>
            <StyledItem>
              <StyledBoxIcon>
                <IoIosCheckmark />
              </StyledBoxIcon>

              <p>
                <span>
                  <em>4 блока Спеціальних Бігових Вправ </em>
                </span>
                для підвищення твоєї ефективності на дистанції.
              </p>
            </StyledItem>
            <StyledItem>
              <StyledBoxIcon>
                <IoIosCheckmark />
              </StyledBoxIcon>

              <p>
                <span>
                  <em>4 блока Силових Вправ </em>
                </span>
                для зміцнення твого тіла та поліпшення витривалості.
              </p>
            </StyledItem>
            <StyledItem>
              <StyledBoxIcon>
                <IoIosCheckmark />
              </StyledBoxIcon>

              <p>
                <span>
                  <em>4 тренування з йоги </em>
                </span>
                для збалансування та розслаблення після інтенсивного тренування.
              </p>
            </StyledItem>
            <StyledItem>
              <StyledBoxIcon>
                <IoIosCheckmark />
              </StyledBoxIcon>

              <p>
                <span>
                  <em>4 вебінара з тренером </em>
                </span>
                для збагачення твоїх знань та відповіді на всі твої питання.
              </p>
            </StyledItem>
          </ul>
        </ContentWrapper>
      </StyledBox>

      <StyledBottomText>
        <p>
          Не чекай, <b>ПОЧНИ СВІЙ ШЛЯХ СЬОГОДНІ!</b> Приєднуйся до{" "}
          <b>My Way 4 тижні</b> і переконайся, як кожен крок наближає тебе до
          досягнення твоєї мети.
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
