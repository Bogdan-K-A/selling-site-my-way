import { Box } from "@mui/system";
import { Container } from "../common/Container/Container";
import { StyledFooter, StyledLogo, StyledText } from "./Footer.styled";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <StyledLogo src="./images/logo/logo.png" alt="" />
          <StyledText>© 2024 Family Run Top</StyledText>
        </Box>
      </Container>
    </StyledFooter>
  );
};
