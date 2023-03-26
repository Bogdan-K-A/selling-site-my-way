import React, { useState } from "react";
import { Box } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

//STYLELIBRARES
import "swiper/css";
import "swiper/css/free-mode";

import { Container } from "../common/Container/Container";
import { Title } from "../ui-component/Title/Title";
import { StyledMainText, StyledSwiper } from "./Ingredients.styled";
import { imgData } from "./imgData";
import { IngredientItem } from "./IngredientItem";

export const Ingredients = () => {
	const [ingredients, setIngredients] = useState(imgData);

	const params = {
		grabCursor: true,
		slidesPerView: 4,
		spaceBetween: 10,
		modules: [FreeMode],
		className: "mySwiper",
		// breakpoints: {
		// 	1400: {
		// 		slidesPerView: 4,
		// 		spaceBetween: 40,
		// 	},
		// 	1024: {
		// 		slidesPerView: 4,
		// 		spaceBetween: 40,
		// 	},
		// 	768: {
		// 		slidesPerView: 3,
		// 		spaceBetween: 30,
		// 	},
		// 	640: {
		// 		slidesPerView: 2,
		// 		spaceBetween: 20,
		// 	},
		// 	320: {
		// 		slidesPerView: 2,
		// 		spaceBetween: 10,
		// 	},
		// },
	};

	return (
		<Container>
			<Box
				sx={{
					textAlign: "center",
					width: 690,
					margin: "0 auto 50px",
				}}>
				<Title margin="0 0 20px 0 ">Ingredients</Title>
				<StyledMainText>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Fusce mollis id arcu vel maximus.
				</StyledMainText>
			</Box>
			{/* сделать swiper */}

			<StyledSwiper {...params}>
				{ingredients.map(({ id, src, title }) => (
					<SwiperSlide key={id}>
						<IngredientItem src={src} title={title} />
					</SwiperSlide>
				))}
			</StyledSwiper>

			<Box
				sx={{
					textAlign: "center",
					width: 894,
					margin: "0 auto",
				}}>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Mauris eget consequat lorem. Ut nec placerat purus. Fusce
					vitae faucibus augue, non commodo elit. Integer risus orci,
					ultricies ac dapibus sed, dignissim interdum quam. Proin
					quis dignissim diam. Donec id magna placerat, fringilla odio
					et, efficitur lacus. Vivamus eu ultricies erat, eu lobortis
					nunc. Sed nec dignissim libero. Integer cursus leo nunc.
					Nulla mattis interdum nunc, sed semper turpis. Cras elit
					lorem, mollis ut feugiat ac, ultricies eu dolor.
				</p>
			</Box>
		</Container>
	);
};
