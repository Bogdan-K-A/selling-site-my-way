import styled from "styled-components";

export const StyledSection = styled.section`
	padding: ${({ padding }) => padding || "0"};

	@media (max-width: 991px) {
		padding: ${({ mobilePadding }) => mobilePadding || "0"};
	}
`;
