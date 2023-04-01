import React, { useState } from "react";
import { motion } from "framer-motion";

import { SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

//STYLELIBRARES
import "swiper/css";
import "swiper/css/free-mode";

import { MContainer } from "../common/Container/Container";
import { Title } from "../ui-component/Title/Title";
import { imgData } from "./imgData";
import { IngredientItem } from "./IngredientItem";

import { TbHandFinger } from "react-icons/tb";

import {
	StyledBox,
	StyledBoxText,
	StyledMainText,
	StyledSwiper,
	StyledText,
	IconPosition,
	StyledSwiperSlide,
} from "./Ingredients.styled";

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

export const Ingredients = () => {
	const [ingredients, setIngredients] = useState(imgData);

	const params = {
		grabCursor: true,
		slidesPerView: 1,
		spaceBetween: 10,
		modules: [FreeMode],
		className: "mySwiper",
		breakpoints: {
			1121: {
				slidesPerView: 4,
				spaceBetween: 10,
			},
			1120: {
				slidesPerView: 3,
				spaceBetween: 10,
			},

			825: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			561: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			560: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
		},
	};

	return (
		<MContainer
			initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0.4, once: true }}>
			<StyledBox>
				<motion.div custom={1} variants={animationLeft}>
					<Title margin="0 0 20px 0 ">Ingredients</Title>
				</motion.div>
				<StyledMainText custom={1} variants={animationRight}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Fusce mollis id arcu vel maximus.
				</StyledMainText>
			</StyledBox>
			<motion.div custom={1} variants={animationLeft}>
				<StyledSwiper {...params}>
					{ingredients.map(({ id, src, srcX2, title }) => (
						<StyledSwiperSlide key={id}>
							<IngredientItem
								src={src}
								srcX2={srcX2}
								title={title}
							/>
						</StyledSwiperSlide>
					))}
				</StyledSwiper>
			</motion.div>

			<StyledBoxText>
				<IconPosition
					animate={{
						x: [0, 50, -50, 0],
					}}
					transition={{
						duration: 2,
						ease: "easeInOut",
						times: [0.3, 0.2, 0, 0.2, 0.3],
						repeat: Infinity,
						repeatDelay: 2,
					}}>
					<TbHandFinger />
				</IconPosition>
				<StyledText custom={2} variants={animationRight}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Mauris eget consequat lorem. Ut nec placerat purus. Fusce
					vitae faucibus augue, non commodo elit. Integer risus orci,
					ultricies ac dapibus sed, dignissim interdum quam. Proin
					quis dignissim diam. Donec id magna placerat, fringilla odio
					et, efficitur lacus. Vivamus eu ultricies erat, eu lobortis
					nunc. Sed nec dignissim libero. Integer cursus leo nunc.
					Nulla mattis interdum nunc, sed semper turpis. Cras elit
					lorem, mollis ut feugiat ac, ultricies eu dolor.
				</StyledText>
			</StyledBoxText>
		</MContainer>
	);
};
