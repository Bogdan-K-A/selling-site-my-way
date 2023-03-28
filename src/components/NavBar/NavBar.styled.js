import styled from "styled-components";
import { Link } from "react-scroll";
import { Box } from "@mui/material";

export const StyledBox = styled(Box)`
	display: flex;
	align-items: center;

	@media (max-width: 991px) {
		flex-direction: column;
		justify-content: center;
	}
`;

export const StyledList = styled.ul`
	@media (max-width: 991px) {
		display: ${({ display }) => display || ""};

		margin-top: 100px;
	}
`;

export const StyledItem = styled.li`
	padding: 50px 0;
	&:not(:last-child) {
		margin-right: 70px;
	}

	@media (max-width: 1100px) {
		&:not(:last-child) {
			margin-right: 30px;
		}
	}

	@media (max-width: 991px) {
		padding: 0;
		margin-bottom: 30px;

		&:not(:last-child) {
			margin-right: 0;
		}
	}
`;

export const StyledLink = styled(Link)`
	padding: 50px 0;
	cursor: pointer;

	font-weight: ${(p) => p.theme.fontWeights.bold};

	@media (max-width: 991px) {
		padding: 0;
		font-size: ${(p) => p.theme.fontSizes.fs28};
	}
`;
