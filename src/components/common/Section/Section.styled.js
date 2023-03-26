import styled from 'styled-components'

export const StyledSection = styled.section`
  padding: ${({ padding }) => padding || '0'};
  /* background-color: ${(p) => p.background || `${p.theme.colors.white}`}; */

  /* @media screen and (max-width: ${(p) => p.theme.breakpoints[8]}) {
    padding: ${(p) => {
      if (p.heroLaptop) return '140px 0 60px 0'
    }};
  } */
`
