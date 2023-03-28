import React from "react";
import { StyledBox, StyledItem, StyledLink, StyledList } from "./NavBar.styled";

export const NavBar = ({ display, toggle }) => {
	return (
		<>
			<StyledList display={display}>
				<StyledBox>
					<StyledItem>
						<StyledLink
							onClick={toggle}
							to="ingredient"
							spy={true}
							smooth={true}
							offset={-10}
							duration={500}>
							INGREDIENT
						</StyledLink>
					</StyledItem>
					<StyledItem>
						<StyledLink
							onClick={toggle}
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
							onClick={toggle}
							to="burgers"
							spy={true}
							smooth={true}
							offset={-10}
							duration={500}>
							BURGERS
						</StyledLink>
					</StyledItem>
					<StyledItem>
						<StyledLink
							onClick={toggle}
							to="location"
							spy={true}
							smooth={true}
							offset={-10}
							duration={500}>
							LOCATION
						</StyledLink>
					</StyledItem>
				</StyledBox>
			</StyledList>
		</>
	);
};
