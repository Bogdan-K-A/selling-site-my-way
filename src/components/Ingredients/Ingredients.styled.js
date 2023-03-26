import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledMainText = styled.p`
	font-size: ${(p) => p.theme.fontSizes.fs24};
	font-weight: ${(p) => p.theme.fontWeights.bold};
`;

export const StyledSwiper = styled(Swiper)`
	position: relative;
	width: 1100px;
	height: 250px;
	/* overflow: hidden; */

	margin: 0 auto 50px;

	&::after {
		position: absolute;
		top: 0;
		right: 0;
		content: "";
		width: 150px;
		height: 100%;

		background: ${(p) => p.theme.whiteShadowRight};
		z-index: 99;
	}
	&::before {
		position: absolute;
		top: 0;
		left: 0;
		content: "";
		width: 150px;
		height: 100%;

		background: ${(p) => p.theme.whiteShadowLeft};
		z-index: 99;
	}
`;
