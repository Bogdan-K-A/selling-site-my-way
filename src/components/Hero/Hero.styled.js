import styled from "styled-components";

export const StyledHero = styled.div`
	width: 100%;
	height: 600px;
	padding: 50px 0 0 0;
	margin-bottom: 100px;

	background-image: url("/images/Tracé_1.svg");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`;

export const StyledImg = styled.img`
	width: 625px;
	height: 646px;
`;
export const ContentWrapper = styled.div`
	margin-top: 92px;
`;

export const StyledTitle = styled.h1`
	font-size: ${(p) => p.theme.fontSizes.fs84};
	font-weight: ${(p) => p.theme.fontWeights.black};

	margin-bottom: 20px;
`;

export const StyledText = styled.p`
	font-size: ${(p) => p.theme.fontSizes.fs24};
	font-weight: ${(p) => p.theme.fontWeights.bold};

	margin-bottom: 20px;
`;
