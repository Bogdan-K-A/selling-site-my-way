import React, { useState } from "react";
import { Box } from "@mui/system";

import { Container } from "../common/Container/Container";
import { Title } from "../ui-component/Title/Title";
import { Button } from "../ui-component/Button/Button";

import {
	DitailsListWrapper,
	StyledImg,
	StyledItem,
	StyledLink,
	StyledList,
	DropDitailsListTitle,
	DropDitailsItem,
} from "./Burgers.styled";

export const Burgers = () => {
	const [name1, setName1] = useState("");
	const [name2, setName2] = useState("");
	const [name3, setName3] = useState("");

	const close = () => {
		setName1("");
		setName2("");
		setName3("");
	};

	const detaisHover = (e) => {
		// if (e.currentTarget.id === "name1") {
		// 	setName1(e.currentTarget.id);
		// 	setName2("");
		// 	setName3("");
		// }
		// if (e.currentTarget.id === "name2") {
		// 	setName1("");
		// 	setName2(e.currentTarget.id);
		// 	setName3("");
		// }
		// if (e.currentTarget.id === "name3") {
		// 	setName1("");
		// 	setName2("");
		// 	setName3(e.currentTarget.id);
		// }

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
		<Container>
			<Box sx={{ display: "flex", alignItem: "center" }}>
				<Title margin="0 auto 50px">Burgers</Title>
			</Box>

			<StyledList>
				<StyledItem>
					<h3>1/4 Pound Cheese</h3>
					<StyledImg src="/images/Design-4.png" alt="" />
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
							<StyledLink onClick={close}>Reduce</StyledLink>
						</DitailsListWrapper>
					)}

					<StyledLink id="name1" onClick={detaisHover}>
						Details
					</StyledLink>
				</StyledItem>

				<StyledItem>
					<h3>Big Burger</h3>
					<StyledImg src="/images/Design-4.png" alt="" />
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
							<StyledLink onClick={close}>Reduce</StyledLink>
						</DitailsListWrapper>
					)}
					<StyledLink id="name2" onClick={detaisHover}>
						Details
					</StyledLink>
				</StyledItem>
				<StyledItem>
					<h3>Pure Bacon</h3>
					<StyledImg src="/images/Design-4.png" alt="" />

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
							<StyledLink onClick={close}>Reduce</StyledLink>
						</DitailsListWrapper>
					)}
					<StyledLink id="name3" onClick={detaisHover}>
						Details
					</StyledLink>
				</StyledItem>
			</StyledList>
			<Box sx={{ display: "flex", justifyContent: "center" }}>
				<Button padding="9px 32px" to="">
					Order now
				</Button>
			</Box>
		</Container>
	);
};
