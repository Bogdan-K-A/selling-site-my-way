import React from "react";
import { motion } from "framer-motion";

import { Container } from "../common/Container/Container";
import { Button } from "../ui-component/Button/Button";

import {
	StyledHero,
	StyledImg,
	StyledText,
	StyledTitle,
	ContentWrapper,
	StyledBox,
} from "./Hero.styled";

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
export const Hero = () => {
	return (
		<StyledHero
			id="hero"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}>
			<Container>
				<StyledBox>
					<ContentWrapper>
						<StyledTitle custom={1} variants={animation}>
							Burger Factory
						</StyledTitle>
						<StyledText custom={2} variants={animation}>
							Your dreamed burger close to your locations!
						</StyledText>
						<motion.div custom={3} variants={animation}>
							<Button
								to="ingredient"
								spy={true}
								smooth={true}
								offset={-10}
								duration={500}
								padding="8px 26px"
								bgcolor="bgcolor">
								Discover the ingredients
							</Button>
						</motion.div>
					</ContentWrapper>

					<picture>
						<source
							media="(min-width: 991px)"
							srcSet="../images/hero/Groupe_2.png"
						/>
						<source
							media="(max-width: 991px)"
							srcSet="../images/hero/Groupe_2@2x.png 2x"
						/>
						<StyledImg variants={animationImg} src="#" alt="" />
					</picture>
				</StyledBox>
			</Container>
		</StyledHero>
	);
};
