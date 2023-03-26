import styled from "styled-components";

export const StyledTitle = styled.h2`
	padding: ${({ padding }) => padding || "0"};
	margin: ${({ margin }) => margin || "0"};

	font-weight: ${(p) => p.theme.fontWeights.black};
	font-size: ${(p) => p.theme.fontSizes.fs64};
`;
