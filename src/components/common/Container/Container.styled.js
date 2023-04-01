import styled from "styled-components";

export const StyledContainer = styled.div`
	max-width: 1400px;
	padding: 0 25px;
	margin: 0 auto;

	@media (max-width: 1120px) {
		width: 100vw;
	}
	@media (max-width: 390px) {
		padding: 0 15px;
	}
`;
