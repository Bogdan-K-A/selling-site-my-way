import styled from "styled-components";

export const IngredientItem = ({ src }) => {
  return (
    <StyledBox>
      <img src={src} alt="" />
    </StyledBox>
  );
};

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  width: 229px;
  height: 162px;
  margin: 0 auto;
  background: ${(p) => p.theme.colors.white};
  box-shadow: ${(p) => p.theme.shadow};
  border-radius: ${(p) => p.theme.radii.r26};

  img {
    width: 252px;
    height: auto;
  }
`;
