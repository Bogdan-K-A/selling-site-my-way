import React from "react";
import styled from "styled-components";

export const IngredientItem = ({ src, title }) => {
	return (
		<StyledBox>
			<StyledImgWrapper>
				<img src={src} alt={title} />
			</StyledImgWrapper>
			<p>{title}</p>
		</StyledBox>
	);
};

const StyledBox = styled.div`
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	align-items: center;

	width: 229px;
	height: 242px;

	background: ${(p) => p.theme.colors.white};
	box-shadow: ${(p) => p.theme.shadow};
	border-radius: ${(p) => p.theme.radii.r26};

	> p {
		font-weight: ${(p) => p.theme.fontWeights.bold};
	}
`;

const StyledImgWrapper = styled.div`
	margin-bottom: 17px;
`;
