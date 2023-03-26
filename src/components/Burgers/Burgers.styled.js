import styled from "styled-components";

export const StyledList = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;

	margin-bottom: 50px;
`;

export const StyledItem = styled.li`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	width: 440px;
	height: 408px;
	padding: 20px;

	background: ${(p) => p.theme.colors.white};
	box-shadow: ${(p) => p.theme.shadow};
	border-radius: ${(p) => p.theme.radii.r26};
`;

export const StyledImg = styled.img`
	width: 220px;
	height: 207px;
`;

export const StyledLink = styled.p`
	font-weight: ${(p) => p.theme.fontWeights.bold};
	color: ${(p) => p.theme.colors.prymaryBtnColor};

	margin-left: 83%;
	cursor: pointer;
`;

export const DitailsListWrapper = styled.div`
	position: absolute;
	bottom: -30%;
	left: 0;

	width: 440px;
	height: 207px;
	padding: 40px 20px 20px;

	background: ${(p) => p.theme.colors.white};
	box-shadow: ${(p) => p.theme.shadow};
	border-bottom-left-radius: ${(p) => p.theme.radii.r26};
	border-bottom-right-radius: ${(p) => p.theme.radii.r26};

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
`;

export const DropDitailsListTitle = styled.h3`
	margin-bottom: 10px;

	font-size: ${(p) => p.theme.fontSizes.fs14};
	font-weight: ${(p) => p.theme.fontWeights.bold};
`;

export const DropDitailsItem = styled.li`
	margin-bottom: 10px;
	font-size: ${(p) => p.theme.fontSizes.fs14};
	/* &:not(:last-child) {
	} */
`;
