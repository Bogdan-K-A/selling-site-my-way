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
					<picture>
						<source
							media="(min-width: 991px)"
							srcSet="./images/logo/Groupe_1.png"
						/>
						<source
							media="(max-width: 991px)"
							srcSet="./images/logo/Groupe_1@2x.png 2x"
						/>
						<StyledLogo src="#" alt="" />
					</picture>

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
