import { MapContainer } from "react-leaflet";
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

export const StyledMap = styled(MapContainer)`
	max-width: 860px;
	height: 52vh;
	border-radius: 30px;
	margin: 0 auto;
	z-index: 98;

	@media (max-width: 884px) {
		max-width: 677px;
	}
	@media (max-width: 577px) {
		height: 40vh;
	}
	@media (max-width: 420px) {
		height: 30vh;
	}
`;
