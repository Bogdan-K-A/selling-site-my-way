import styled from "styled-components";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

export const StyledBox = styled(Box)`
	display: flex;
	justify-content: space-between;

	@media (max-width: 1354px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const StyledImg = styled(motion.img)`
	width: 635px;
	height: 441px;

	@media (max-width: 991px) {
		max-width: 100%;
		height: 100%;
	}
`;

export const ContentWrapper = styled(motion.div)`
	max-width: 668px;

	@media (max-width: 1354px) {
		text-align: center;
		margin-bottom: 30px;
	}
`;

export const StyledMainText = styled.p`
	font-size: ${(p) => p.theme.fontSizes.fs24};
	font-weight: ${(p) => p.theme.fontWeights.bold};

	margin-bottom: 20px;

	@media (max-width: 991px) {
		font-size: ${(p) => p.theme.fontSizes.fs18};
	}
`;
