import React from "react";
import { Box } from "@mui/material";
import { Container } from "../common/Container/Container";
import { Title } from "../ui-component/Title/Title";
import { StyledImg, StyledItem, StyledList } from "./Location.styled";

export const Location = () => {
	return (
		<Container>
			<Box sx={{ display: "flex", alignItem: "center" }}>
				<Title margin="0 auto 30px">Location</Title>
			</Box>
			<StyledList>
				<StyledItem>Burger Factory</StyledItem>
				<StyledItem>Pl. de la Riponne 10</StyledItem>
				<StyledItem>1005 Lausanne</StyledItem>
				<StyledItem>021 800 00 00</StyledItem>
			</StyledList>
			<Box sx={{ display: "flex", justifyContent: "center" }}>
				<StyledImg src="/images/Image 1.png" alt="" />
			</Box>
		</Container>
	);
};
