import React, { useState } from "react";
import { Box } from "@mui/system";
import { motion } from "framer-motion";

import { MContainer } from "../common/Container/Container";
import { Title } from "../ui-component/Title/Title";
import { Button } from "../ui-component/Button/Button";
import { animationBurgers } from "../../animate/animate";

import {
	DitailsListWrapper,
	StyledImg,
	StyledItem,
	StyledList,
	DropDitailsListTitle,
	DropDitailsItem,
	TitleCardMargin,
	StyledBoxItem,
	StyledButtonDrop,
	StyledCloceButton,
} from "./Burgers.styled";

export const Burgers = ({ openModal }) => {
	const [name1, setName1] = useState("");
	const [name2, setName2] = useState("");
	const [name3, setName3] = useState("");

	const close = () => {
		setName1("");
		setName2("");
		setName3("");
	};

	const detaisHover = (e) => {
		switch (e.currentTarget.id) {
			case "name1":
				setName1(e.currentTarget.id);
				setName2("");
				setName3("");
				break;

			case "name2":
				setName1("");
				setName2(e.currentTarget.id);
				setName3("");
				break;

			case "name3":
				setName1("");
				setName2("");
				setName3(e.currentTarget.id);
				break;

			default:
				return;
		}
	};

	return (
		<MContainer
			initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0.2, once: true }}>
			<motion.div custom={0.5} variants={animationBurgers}>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<Title margin="0 auto 50px">Burgers</Title>
				</Box>
			</motion.div>
			<StyledList>
				<StyledItem custom={1} variants={animationBurgers}>
					<StyledBoxItem>
						<TitleCardMargin>1/4 Pound Cheese</TitleCardMargin>

						<picture>
							<source
								media="(min-width: 991px)"
								srcSet="/images/Design-4.png"
							/>
							<source
								media="(max-width: 991px)"
								srcSet="./images/Design-4@2x.png 2x"
							/>
							<StyledImg src="#" alt="" />
						</picture>
					</StyledBoxItem>
					{name1 && (
						<DitailsListWrapper>
							<DropDitailsListTitle>
								Ingredient
							</DropDitailsListTitle>
							<ul>
								<DropDitailsItem>Lorem ipsum</DropDitailsItem>
								<DropDitailsItem>Lorem ipsum</DropDitailsItem>
								<DropDitailsItem>Lorem ipsum</DropDitailsItem>
							</ul>
							<StyledCloceButton onClick={close}>
								Reduce
							</StyledCloceButton>
						</DitailsListWrapper>
					)}

					{!name1 && (
						<StyledButtonDrop id="name1" onClick={detaisHover}>
							Details
						</StyledButtonDrop>
					)}
				</StyledItem>

				<StyledItem custom={2} variants={animationBurgers}>
					<StyledBoxItem>
						<TitleCardMargin>Big Burger</TitleCardMargin>
						<picture>
							<source
								media="(min-width: 991px)"
								srcSet="/images/Design-4.png"
							/>
							<source
								media="(max-width: 991px)"
								srcSet="./images/Design-4@2x.png 2x"
							/>
							<StyledImg src="#" alt="" />
						</picture>
					</StyledBoxItem>
					{name2 && (
						<DitailsListWrapper>
							<DropDitailsListTitle>
								Ingredient
							</DropDitailsListTitle>
							<ul>
								<DropDitailsItem>Lorem ipsum</DropDitailsItem>
								<DropDitailsItem>Lorem ipsum</DropDitailsItem>
								<DropDitailsItem>Lorem ipsum</DropDitailsItem>
							</ul>
							<StyledCloceButton onClick={close}>
								Reduce
							</StyledCloceButton>
						</DitailsListWrapper>
					)}
					{!name2 && (
						<StyledButtonDrop id="name2" onClick={detaisHover}>
							Details
						</StyledButtonDrop>
					)}
				</StyledItem>
				<StyledItem custom={3} variants={animationBurgers}>
					<StyledBoxItem>
						<TitleCardMargin>Pure Bacon</TitleCardMargin>
						<picture>
							<source
								media="(min-width: 991px)"
								srcSet="/images/Design-4.png"
							/>
							<source
								media="(max-width: 991px)"
								srcSet="./images/Design-4@2x.png 2x"
							/>
							<StyledImg src="#" alt="" />
						</picture>
					</StyledBoxItem>
					{name3 && (
						<DitailsListWrapper>
							<DropDitailsListTitle>
								Ingredient
							</DropDitailsListTitle>
							<ul>
								<DropDitailsItem>Lorem ipsum</DropDitailsItem>
								<DropDitailsItem>Lorem ipsum</DropDitailsItem>
								<DropDitailsItem>Lorem ipsum</DropDitailsItem>
							</ul>
							<StyledCloceButton onClick={close}>
								Reduce
							</StyledCloceButton>
						</DitailsListWrapper>
					)}
					{!name3 && (
						<StyledButtonDrop id="name3" onClick={detaisHover}>
							Details
						</StyledButtonDrop>
					)}
				</StyledItem>
			</StyledList>
			<motion.div custom={4} variants={animationBurgers}>
				<Box sx={{ display: "flex", justifyContent: "center" }}>
					<Button onClick={openModal} padding="9px 32px" to="">
						Order now
					</Button>
				</Box>
			</motion.div>
		</MContainer>
	);
};
