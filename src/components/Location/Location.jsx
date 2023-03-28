import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

import { MContainer } from "../common/Container/Container";
import { Title } from "../ui-component/Title/Title";

import {
	PositionBox,
	RelativeBox,
	StyledBox,
	StyledImg,
	StyledImgLocation,
	StyledItem,
	StyledList,
} from "./Location.styled";

const animationLeft = {
	hidden: {
		x: -300,
		opacity: 0,
	},
	visible: (custom) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
};
const animationRight = {
	hidden: {
		x: 300,
		opacity: 0,
	},
	visible: (custom) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
};

export const Location = () => {
	return (
		<MContainer
			initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0.2, once: true }}>
			<motion.div custom={1} variants={animationLeft}>
				<Box sx={{ display: "flex", alignItem: "center" }}>
					<Title margin="0 auto 30px">Location</Title>
				</Box>
			</motion.div>
			<motion.div custom={2} variants={animationRight}>
				<StyledList>
					<StyledItem>Burger Factory</StyledItem>
					<StyledItem>Pl. de la Riponne 10</StyledItem>
					<StyledItem>1005 Lausanne</StyledItem>
					<StyledItem>021 800 00 00</StyledItem>
				</StyledList>
				<RelativeBox>
					<picture>
						<source
							media="(min-width: 991px)"
							srcSet="/images/Image_1.png"
						/>
						<source
							media="(max-width: 991px)"
							srcSet="./images/Image_1@2x.png 2x"
						/>
						<StyledImg src="#" alt="" />
					</picture>
					<PositionBox>
						<picture>
							<source
								media="(min-width: 991px)"
								srcSet="/images/Design.png"
							/>
							<source
								media="(max-width: 991px)"
								srcSet="./images/Design@2x.png 2x"
							/>
							<StyledImgLocation src="#" alt="" />
						</picture>
					</PositionBox>
				</RelativeBox>
			</motion.div>
		</MContainer>
	);
};
