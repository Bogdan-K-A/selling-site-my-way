import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-scroll";
import { Container } from "../common/Container/Container";
import { Button } from "../ui-component/Button/Button";

import {
	StyledHero,
	StyledImg,
	StyledText,
	StyledTitle,
	ContentWrapper,
} from "./Hero.styled";

export const Hero = () => {
	return (
		<StyledHero>
			<Container>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
					}}>
					<ContentWrapper>
						<StyledTitle>Burger Factory</StyledTitle>
						<StyledText>
							Your dreamed burger close to your locations!
						</StyledText>

						<Button
							to="ingredient"
							spy={true}
							smooth={true}
							offset={-90}
							duration={500}
							padding="8px 26px"
							bgcolor="bgcolor">
							Discover the ingredients
						</Button>
					</ContentWrapper>
					<div>
						<StyledImg src="../images/hero/Groupe 2.png" alt="" />
					</div>
				</Box>
			</Container>
		</StyledHero>
	);
};
