import { Box } from "@mui/system";
import { motion } from "framer-motion";
import { MContainer } from "../common/Container/Container";
import { Title } from "../ui-component/Title/Title";
import {
  StyledItem,
  StyledList,
  TitleCardMargin,
  StyledBoxItem,
  StyledPrice,
  StiledBorder,
} from "./Price.styled";
import { StiledButtonLink } from "../ui-component/Button/Button.styled";

export const Price = () => {
  return (
    <MContainer>
      <motion.div>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Title margin="0 auto 30px">Обери свій курс</Title>
        </Box>
      </motion.div>
      <StyledList>
        {/* 1 */}
        <StyledItem>
          <div style={{ margin: "0 0 30px 0" }}>
            <TitleCardMargin>My Way 4 тижні</TitleCardMargin>

            <p>
              Для бажаючих почати бігати чи відновити свій біг або підтримувати
              свою фізичну форму
            </p>
          </div>
          <div>
            <p>
              Наші 4 тижні бігових курсів пропонують не лише виклик, а й
              справжній досвід, який змінить твоє сприйняття бігу та твоє тіло.{" "}
            </p>
          </div>

          <div style={{ padding: "20px" }}>
            <StyledBoxItem>
              <StyledPrice>40 €</StyledPrice>
            </StyledBoxItem>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <StiledButtonLink href="" padding="9px 32px">
                Придбати курс
              </StiledButtonLink>
            </Box>
          </div>
        </StyledItem>

        {/* 2 */}
        <StyledItem>
          <div>
            <StyledBoxItem>
              <TitleCardMargin>My Way 10 км 5 тижнів</TitleCardMargin>
              <p>
                Підготовка до забігу 10 км. Для початківців чи бігаючих
                покращити результат
              </p>
            </StyledBoxItem>
          </div>
          <div>
            <StiledBorder>
              <StyledBoxItem>
                <TitleCardMargin>Загальний</TitleCardMargin>
                <StyledPrice>77 €</StyledPrice>
              </StyledBoxItem>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <StiledButtonLink href="" padding="9px 32px">
                  Придбати курс
                </StiledButtonLink>
              </Box>
            </StiledBorder>
            <StiledBorder>
              <StyledBoxItem>
                <TitleCardMargin>Індивідуальний</TitleCardMargin>
                <StyledPrice>150 €</StyledPrice>
              </StyledBoxItem>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <StiledButtonLink href="" padding="9px 32px">
                  Придбати курс
                </StiledButtonLink>
              </Box>
            </StiledBorder>
          </div>
        </StyledItem>
        <StyledItem>
          <div>
            <StyledBoxItem>
              <TitleCardMargin>My Way 21 км 8 тижнів</TitleCardMargin>
              <p>Фінішувати 21 км чи покрищити рузультат </p>
              {/* <StyledPrice>0,000€</StyledPrice> */}
            </StyledBoxItem>
          </div>
          <div>
            {" "}
            <StiledBorder>
              <StyledBoxItem>
                <TitleCardMargin>Загальний</TitleCardMargin>
                <StyledPrice>120 €</StyledPrice>
              </StyledBoxItem>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <StiledButtonLink href="" padding="9px 32px">
                  Придбати курс
                </StiledButtonLink>
              </Box>
            </StiledBorder>
            <StiledBorder>
              <StyledBoxItem>
                <TitleCardMargin>Індивідуальний</TitleCardMargin>
                <StyledPrice>250 €</StyledPrice>
              </StyledBoxItem>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <StiledButtonLink href="" padding="9px 32px">
                  Придбати курс
                </StiledButtonLink>
              </Box>
            </StiledBorder>
          </div>
        </StyledItem>
      </StyledList>
    </MContainer>
  );
};
