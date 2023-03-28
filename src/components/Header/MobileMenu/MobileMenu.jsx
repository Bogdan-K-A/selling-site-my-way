import React from "react";
import { NavBar } from "../../NavBar/NavBar";
import { GrClose } from "react-icons/gr";
import { ButtonClosePosition, StyledDropMenu } from "./MobileMenu.styled";
import { Button } from "../../ui-component/Button/Button";
import { Box } from "@mui/system";

export const MobileMenu = ({ toggle, openModal }) => {
	return (
		<StyledDropMenu
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				duration: 0.8,
				delay: 0.5,
				ease: [0, 0.71, 0.2, 1.01],
			}}>
			<ButtonClosePosition>
				<GrClose onClick={toggle} size="34px" />
			</ButtonClosePosition>

			<NavBar toggle={toggle} />
			<Box sx={{ display: "flex", justifyContent: "center" }}>
				<Button onClick={openModal} to="" padding="9px 32px">
					Order now
				</Button>
			</Box>
		</StyledDropMenu>
	);
};
