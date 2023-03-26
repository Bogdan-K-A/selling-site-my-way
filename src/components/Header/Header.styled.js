import styled from "styled-components";
import { Link } from "react-scroll";

export const StyledHeader = styled.header`
	background: ${(p) => p.theme.colors.white};

	box-shadow: ${(p) => p.theme.shadow};
	z-index: 99;
`;

export const StyledLogo = styled.img`
	width: 208px;
	height: 67px;

	margin-right: 102px;
`;

export const StyledItem = styled.li`
	padding: 50px 0;
	&:not(:last-child) {
		margin-right: 70px;
	}
`;

export const StyledLink = styled(Link)`
	padding: 50px 0;
	cursor: pointer;

	font-weight: ${(p) => p.theme.fontWeights.bold};
`;
