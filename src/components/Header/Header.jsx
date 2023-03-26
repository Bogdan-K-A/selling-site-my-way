import { Box } from "@mui/system";
import React from "react";
import { Container } from "../common/Container/Container.jsx";
import { Button } from "../ui-component/Button/Button.jsx";

import {
	StyledHeader,
	StyledItem,
	StyledLink,
	StyledLogo,
} from "./Header.styled";

export const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<a href="">
							<StyledLogo
								src="./images/logo/Groupe 1.png"
								alt=""
							/>
						</a>
						<ul>
							<Box sx={{ display: "flex" }}>
								<StyledItem>
									<StyledLink
										to="ingredient"
										spy={true}
										smooth={true}
										offset={-90}
										duration={500}>
										INGREDIENT
									</StyledLink>
								</StyledItem>
								<StyledItem>
									<StyledLink
										to="story"
										spy={true}
										smooth={true}
										offset={-90}
										duration={500}>
										STORY
									</StyledLink>
								</StyledItem>
								<StyledItem>
									<StyledLink
										to="burgers"
										spy={true}
										smooth={true}
										offset={-90}
										duration={500}>
										BURGERS
									</StyledLink>
								</StyledItem>
								<StyledItem>
									<StyledLink
										to="location"
										spy={true}
										smooth={true}
										offset={-90}
										duration={500}>
										LOCATION
									</StyledLink>
								</StyledItem>
							</Box>
						</ul>
					</Box>
					<Button to="" padding="9px 32px">
						Order now
					</Button>
				</Box>
			</Container>
		</StyledHeader>
	);
};
