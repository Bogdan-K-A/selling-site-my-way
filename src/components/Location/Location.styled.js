import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledList = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin-bottom: 30px;

	@media (max-width: 884px) {
		margin-bottom: 0;
	}

	@media (max-width: 420px) {
		flex-direction: column;
	} ;
`;
export const StyledItem = styled.li`
	font-size: ${(p) => p.theme.fontSizes.fs24};
	:first-child {
		font-weight: ${(p) => p.theme.fontWeights.bold};
	}

	&:not(:last-child) {
		margin-right: 30px;

		@media (max-width: 420px) {
			margin-right: 0;
		}
	}

	@media (max-width: 884px) {
		margin-bottom: 20px;
		font-size: ${(p) => p.theme.fontSizes.fs18};
	}
`;
export const RelativeBox = styled.div`
	position: relative;
	max-width: 860px;
	max-height: 483px;
	margin: 0 auto;
`;

export const StyledImg = styled.img`
	max-width: 860px;
	max-height: 483px;

	@media (max-width: 991px) {
		width: 860px;
	}

	@media (max-width: 910px) {
		width: 100%;
	}
`;

export const PositionBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	position: absolute;
	top: 40%;
	left: 40%;

	width: 50px;
	height: 50px;

	border-radius: ${(p) => p.theme.radii.r50};
	background: ${(p) => p.theme.colors.white};

	@media (max-width: 700px) {
		width: 40px;
		height: 40px;
	}
	@media (max-width: 420px) {
		width: 30px;
		height: 30px;
	}
`;

export const StyledImgLocation = styled.img`
	width: 36px;
	height: 33px;

	@media (max-width: 700px) {
		width: 26px;
		height: 22px;
	}
	@media (max-width: 420px) {
		width: 20px;
		height: 16px;
	}
`;
