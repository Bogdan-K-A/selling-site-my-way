import React from "react";
import { Box } from "@mui/system";

import { Container } from "../common/Container/Container";
import { Title } from "../ui-component/Title/Title";

import { StyledImg, ContentWrapper, StyledMainText } from "./TheStory.styled";

export const TheStory = () => {
	return (
		<Container>
			<Box sx={{ display: "flex", justifyContent: "space-between" }}>
				<ContentWrapper>
					<Title margin="0 0 20px">The Story</Title>
					<StyledMainText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Fusce mollis id arcu vel maximus.
					</StyledMainText>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Mauris eget consequat lorem. Ut nec placerat purus.
						Fusce vitae faucibus augue, non commodo elit. Integer
						risus orci, ultricies ac dapibus sed, dignissim interdum
						quam. Proin quis dignissim diam. Donec id magna
						placerat, fringilla odio et, efficitur lacus. Vivamus eu
						ultricies erat, eu lobortis nunc. Sed nec dignissim
						libero. Integer cursus leo nunc. Nulla mattis interdum
						nunc, sed semper turpis. Cras elit lorem, mollis ut
						feugiat ac, ultricies eu dolor.
					</p>
				</ContentWrapper>
				<div>
					<StyledImg src="/images/Rectangle 10.png" alt="" />
				</div>
			</Box>
		</Container>
	);
};
