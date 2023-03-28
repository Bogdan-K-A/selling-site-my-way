import React from "react";

import { MContainer } from "../common/Container/Container";
import { Title } from "../ui-component/Title/Title";

import {
	StyledImg,
	ContentWrapper,
	StyledMainText,
	StyledBox,
} from "./TheStory.styled";

const animation = {
	hidden: {
		x: -500,
		opacity: 0,
	},
	visible: (custom) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
};

const animationImg = {
	hidden: {
		x: 500,
		opacity: 0,
	},
	visible: (custom) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
};

export const TheStory = () => {
	return (
		<MContainer
			initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0.2, once: true }}>
			<StyledBox>
				<ContentWrapper custom={1} variants={animation}>
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
				<picture>
					<source
						media="(min-width: 991px)"
						srcSet="../images/Rectangle_10.png"
					/>
					<source
						media="(max-width: 991px)"
						srcSet="../images/Rectangle_10@2x.png 2x"
					/>
					<StyledImg variants={animationImg} src="#" alt="" />
				</picture>
			</StyledBox>
		</MContainer>
	);
};
