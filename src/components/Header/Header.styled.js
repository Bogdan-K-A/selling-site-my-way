import styled from "styled-components";
import { Box } from "@mui/system";

export const StyledHeader = styled.header`
	background: ${(p) => p.theme.colors.white};

	box-shadow: ${(p) => p.theme.shadow};
	z-index: 99;
`;

export const StyledBox = styled(Box)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const NavWrapper = styled(Box)`
	display: flex;
	align-items: center;

	@media (max-width: 991px) {
		justify-content: space-between;
		width: 100%;
	}
`;

export const StyledLogo = styled.img`
	max-width: 208px;
	max-height: 67px;

	margin-right: 102px;

	@media (max-width: 991px) {
		padding: 20px 0 20px 0;
	}
`;

export const DropMenuWrapper = styled.div`
	@media (min-width: 991px) {
		display: none;
	}
`;
