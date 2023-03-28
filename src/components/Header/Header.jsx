import { Box } from "@mui/system";
import React, { useState } from "react";
import { Container } from "../common/Container/Container.jsx";
import { NavBar } from "../NavBar/NavBar.jsx";
import { Button } from "../ui-component/Button/Button.jsx";

import { AiOutlineMenu } from "react-icons/ai";

import {
	DropMenuWrapper,
	NavWrapper,
	StyledBox,
	StyledHeader,
	StyledLogo,
} from "./Header.styled";
import { MobileMenu } from "./MobileMenu/MobileMenu.jsx";

export const Header = ({ openModal }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen((isOpen) => !isOpen);

	return (
		<StyledHeader>
			<Container>
				<StyledBox>
					<NavWrapper>
						<a href="">
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
						</a>
						<NavBar display="none" />

						{isOpen ? (
							<MobileMenu toggle={toggle} openModal={openModal} />
						) : (
							<DropMenuWrapper>
								<AiOutlineMenu size={"2em"} onClick={toggle} />
							</DropMenuWrapper>
						)}
					</NavWrapper>
					<Button
						onClick={openModal}
						display="none"
						to=""
						padding="9px 32px">
						Order now
					</Button>
				</StyledBox>
			</Container>
		</StyledHeader>
	);
};
