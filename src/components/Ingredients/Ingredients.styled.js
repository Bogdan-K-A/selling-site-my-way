import { Box } from "@mui/material";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

export const StyledMainText = styled(motion.p)`
	font-size: ${(p) => p.theme.fontSizes.fs24};
	font-weight: ${(p) => p.theme.fontWeights.bold};

	@media (max-width: 991px) {
		font-size: ${(p) => p.theme.fontSizes.fs18};
	}
`;

export const StyledBox = styled(Box)`
	text-align: center;
	max-width: 690px;
	margin: 0 auto 50px;
`;

export const StyledSwiper = styled(Swiper)`
	position: relative;
	max-width: 1100px;
	height: 250px;

	margin: 0 auto 50px;

	@media (max-width: 1120px) {
		max-width: 900px;
	}
	@media (max-width: 991px) {
		/* width: 80vw; */
		/* max-width: 800px; */
		max-width: 520px;
	}

	@media (max-width: 560px) {
		width: 80vw;
	}

	&::after {
		position: absolute;
		top: 0;
		right: 0;
		content: "";
		width: 150px;
		height: 100%;

		background: ${(p) => p.theme.whiteShadowRight};
		z-index: 99;
		@media (max-width: 825px) {
			width: 100px;
		}
		@media (max-width: 560px) {
			display: none;
		}
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

		@media (max-width: 825px) {
			width: 100px;
		}
		@media (max-width: 560px) {
			display: none;
		}
	}
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
	@media (max-width: 991px) and (min-width: 561px) {
		transform: translate3d(-123px, 0px, 0px) !important;
	}
`;

export const StyledBoxText = styled(Box)`
	position: relative;

	text-align: center;
	max-width: 894px;
	margin: 0 auto;
`;

export const StyledText = styled(motion.p)`
	@media (max-width: 991px) {
		font-size: ${(p) => p.theme.fontSizes.fs18};
	}
`;

export const IconPosition = styled(motion.div)`
	position: absolute;
	top: -30%;
	left: 49%;
	> svg {
		width: 30px;
		height: 30px;
	}

	@media (max-width: 991px) {
		top: -25%;
	}
	@media (max-width: 740px) {
		top: -20%;
	}
	@media (max-width: 640px) {
		top: -17%;
	}
	@media (max-width: 530px) {
		top: -13%;
	}
	@media (max-width: 420px) {
		top: -10%;
	}
`;
