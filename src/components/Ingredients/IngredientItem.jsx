import React from "react";
import styled from "styled-components";

export const IngredientItem = ({ src, srcX2, title }) => {
	return (
		<StyledBox>
			<StyledImgWrapper>
				<picture>
					<source media="(min-width: 991px)" srcSet={src} />
					<source media="(max-width: 991px)" srcSet={`${srcX2} 2x`} />
					<img src="#" alt={title} />
				</picture>
			</StyledImgWrapper>
			<p>{title}</p>
		</StyledBox>
	);
};

// styled

const StyledBox = styled.div`
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	align-items: center;

	width: 229px;
	height: 242px;
	padding: 20px;
	margin: 0 auto;

	background: ${(p) => p.theme.colors.white};
	box-shadow: ${(p) => p.theme.shadow};
	border-radius: ${(p) => p.theme.radii.r26};

	img {
		width: 152px;
	}

	> p {
		font-weight: ${(p) => p.theme.fontWeights.bold};
	}
`;

const StyledImgWrapper = styled.div`
	margin-bottom: 17px;
`;
