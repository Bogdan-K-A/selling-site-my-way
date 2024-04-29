import { Box } from "@mui/system";
import { motion } from "framer-motion";
import { MContainer } from "../common/Container/Container";
import { Title } from "../ui-component/Title/Title";
import { animationBurgers } from "../../animate/animate";
import {
  StyledItem,
  StyledList,
  TitleCardMargin,
  StyledBoxItem,
  StyledPrice,
  BonusBox,
  StyledContentList,
} from "./Price.styled";
import { StiledButtonLink } from "../ui-component/Button/Button.styled";

export const Price = () => {
  return (
    <MContainer
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <motion.div custom={0.5} variants={animationBurgers}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Title margin="0 auto 50px">Обери свій формат</Title>
        </Box>
      </motion.div>
      <StyledList>
        <StyledItem custom={1} variants={animationBurgers}>
          <div>
            <StyledBoxItem>
              <TitleCardMargin>СТАНДАРТ</TitleCardMargin>
              <StyledPrice>1,500₴</StyledPrice>
            </StyledBoxItem>

            <StyledContentList>
              <li>
                <p>14 днів курсу + 14 днів доступу </p>
              </li>
              <li>
                <p>Чат підтримки 28 днів</p>
              </li>
              <li>
                <p>Онлайн тренування</p>
              </li>
              <li>
                <p>Відео розминки</p>
              </li>
              <li>
                <p>Відеоуроки бігових та силових вправ</p>
              </li>
            </StyledContentList>
          </div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "80px",
            }}
          >
            <StiledButtonLink
              href="https://secure.wayforpay.com/button/bf26dd4526256"
              padding="9px 32px"
            >
              Придбати
            </StiledButtonLink>
          </Box>
        </StyledItem>

        <StyledItem custom={2} variants={animationBurgers}>
          <div>
            <StyledBoxItem>
              <TitleCardMargin>ЗІ ЗВОРОТНІМ ЗВ'ЯЗКОМ</TitleCardMargin>
              <StyledPrice>2,500₴</StyledPrice>
            </StyledBoxItem>
            <StyledContentList>
              <li>
                <p>14 днів курсу + 14 днів доступу</p>
              </li>
              <li>
                <p>
                  Аналіз графіків особисто тренером та надання індивідуальних
                  настанов та корегування
                </p>
              </li>
              <li>
                <p>Аналіз техніки бігу та пояснення помилок</p>
              </li>
              <li>
                <p>Пошук шляхів для покращення техніки бігу</p>
              </li>
            </StyledContentList>
          </div>

          <BonusBox>
            <p>Зворотній зв’язок після тренувань, коментарі графіків пульсу.</p>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "15px",
              }}
            >
              <StiledButtonLink
                href="https://secure.wayforpay.com/button/be51ee5ae8cfa"
                padding="9px 32px"
              >
                Придбати
              </StiledButtonLink>
            </Box>
          </BonusBox>
        </StyledItem>
      </StyledList>
    </MContainer>
  );
};
