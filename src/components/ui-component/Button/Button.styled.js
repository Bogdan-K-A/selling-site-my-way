import styled from "styled-components";
import { Link } from "react-scroll";

//если использовать react-scroll тогда в ставить вместо а (Link)

export const StyledButton = styled(Link)`
	display: inline-block;
	margin: ${({ margin }) => margin || "0"};
	padding: ${({ padding }) => padding || "0"};
	/* padding: 15px 30px; */

	background-color: ${({ bgcolor, theme }) =>
		bgcolor
			? `${theme.colors.secondaryBtnColor}`
			: `${theme.colors.prymaryBtnColor}`};

	font-size: ${(p) => p.theme.fontSizes.fs18};
	font-weight: ${(p) => p.theme.fontWeights.bold};

	border-radius: ${(p) => p.theme.radii.r10};

	cursor: pointer;
	transition: 0.3s ease;

	&:hover,
	&:focus {
		box-shadow: ${(p) => p.theme.shadowBtn};
		font-size: calc(3px + 1vw);
		transition: 0.3s ease;
	}

	@media (max-width: 991px) {
		display: ${({ display }) => display || ""};
	}
`;
