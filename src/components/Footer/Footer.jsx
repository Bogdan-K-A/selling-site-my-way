import { Box } from "@mui/system";
import React from "react";
import { Container } from "../common/Container/Container";
import { StyledFooter, StyledItem, StyledLogo } from "./Footer.styled";

export const Footer = () => {
	return (
		<StyledFooter>
			<Container>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<StyledLogo src="/images/logo/Groupe 1.png" alt="" />

					<ul>
						<StyledItem>Burger Factory</StyledItem>
						<StyledItem>Pl. de la Riponne 10</StyledItem>
						<StyledItem>1005 Lausanne</StyledItem>
						<StyledItem>021 800 00 00</StyledItem>
					</ul>
				</Box>
			</Container>
		</StyledFooter>
	);
};
