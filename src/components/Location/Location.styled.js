import styled from "styled-components";

export const StyledList = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 30px;
`;
export const StyledItem = styled.li`
	font-size: ${(p) => p.theme.fontSizes.fs24};
	:first-child {
		font-weight: ${(p) => p.theme.fontWeights.bold};
	}

	&:not(:last-child) {
		margin-right: 30px;
	}
`;

export const StyledImg = styled.img`
	width: 860px;
	height: 483px;
`;
