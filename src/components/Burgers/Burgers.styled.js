import styled from "styled-components";
import { Box } from "@mui/system";
import { motion } from "framer-motion";

export const StyledList = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;

	margin-bottom: 50px;

	@media (max-width: 1372px) {
		justify-content: space-evenly;
	}

	@media (max-width: 1075px) {
		flex-direction: column;
	}

	@media (max-width: 1075px) {
		margin-bottom: 20px;
	} ;
`;

export const StyledItem = styled(motion.li)`
	position: relative;

	width: 440px;
	height: 408px;
	padding: 20px;

	background: ${(p) => p.theme.colors.white};
	box-shadow: ${(p) => p.theme.shadow};
	border-radius: ${(p) => p.theme.radii.r26};

	@media (max-width: 1372px) {
		max-width: 340px;
		max-height: 308px;
	}

	@media (max-width: 1075px) {
		margin-bottom: 30px;
	} ;
`;

export const StyledBoxItem = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 48px;

	@media (max-width: 1372px) {
		margin-bottom: 28px;
	} ;
`;

export const TitleCardMargin = styled.h3`
	margin-bottom: 60px;
	@media (max-width: 1372px) {
		margin-bottom: 30px;
	} ;
`;

export const StyledImg = styled.img`
	width: 220px;
	height: 207px;

	@media (max-width: 1372px) {
		width: 170px;
		height: 157px;
	} ;
`;

export const StyledButtonDrop = styled.p`
	font-weight: ${(p) => p.theme.fontWeights.bold};
	color: ${(p) => p.theme.colors.prymaryBtnColor};
	width: 65px;
	margin-left: auto;

	cursor: pointer;
	transition: 0.3s ease;

	:hover,
	:focus {
		font-size: calc(4px + 1vw);
		transition: 0.3s ease;
	}
`;

export const StyledCloceButton = styled(StyledButtonDrop)`
	@media (max-width: 1372px) {
		position: absolute;
		bottom: 13px;
		right: 23px;
	} ;
`;

export const DitailsListWrapper = styled.div`
	position: absolute;

	bottom: -40%;
	left: 0;

	width: 440px;
	height: 181px;
	padding: 20px;

	background: ${(p) => p.theme.colors.white};
	box-shadow: ${(p) => p.theme.shadow};
	border-bottom-left-radius: ${(p) => p.theme.radii.r26};
	border-bottom-right-radius: ${(p) => p.theme.radii.r26};

	@media (max-width: 1372px) {
		width: 340px;
		height: 142px;
	}

	::before {
		content: "";
		width: 100%;
		height: 10px;
		position: absolute;
		top: -5px;
		left: 0;

		background: ${(p) => p.theme.colors.white};

		z-index: 99;
	}
	z-index: 99;
`;

export const DropDitailsListTitle = styled.h3`
	margin-bottom: 10px;

	font-size: ${(p) => p.theme.fontSizes.fs14};
	font-weight: ${(p) => p.theme.fontWeights.bold};

	@media (max-width: 1372px) {
		margin-bottom: 5px;
	} ;
`;

export const DropDitailsItem = styled.li`
	margin-bottom: 10px;
	font-size: ${(p) => p.theme.fontSizes.fs14};

	@media (max-width: 1372px) {
		margin-bottom: 5px;
	} ;
`;
