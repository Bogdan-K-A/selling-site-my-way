import styled from "styled-components";
import { Box } from "@mui/system";
import { motion } from "framer-motion";

export const StyledHero = styled(motion.div)`
	max-width: 100%;
	max-height: 600px;
	padding: 50px 0 0 0;
	margin-bottom: 100px;

	background-image: url("/images/Tracé_1.svg");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;

	@media (max-width: 991px) {
		margin-bottom: 0;
	}
`;

export const StyledImg = styled(motion.img)`
	max-width: 625px;
	max-height: 646px;

	@media (max-width: 991px) {
		max-width: 325px;
		max-height: 346px;
		/* display: none; */
	}
`;

export const StyledBox = styled(Box)`
	display: flex;
	justify-content: space-between;

	@media (max-width: 991px) {
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
`;

export const ContentWrapper = styled.div`
	margin-top: 92px;

	@media (max-width: 991px) {
		margin-top: 0;
		margin-bottom: 40px;
	}
`;

export const StyledTitle = styled(motion.h1)`
	font-size: ${(p) => p.theme.fontSizes.fs84};
	font-weight: ${(p) => p.theme.fontWeights.black};

	margin-bottom: 20px;

	@media (max-width: 991px) {
		font-size: ${(p) => p.theme.fontSizes.fs64};
	}
	@media (max-width: 555px) {
		font-size: ${(p) => p.theme.fontSizes.fs41};
	}
`;

export const StyledText = styled(motion.p)`
	font-size: ${(p) => p.theme.fontSizes.fs24};
	font-weight: ${(p) => p.theme.fontWeights.bold};

	margin-bottom: 20px;

	@media (max-width: 555px) {
		font-size: ${(p) => p.theme.fontSizes.fs18};
	}
`;
