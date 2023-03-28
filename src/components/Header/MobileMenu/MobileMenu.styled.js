import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledDropMenu = styled(motion.div)`
	position: fixed;
	top: 0%;
	left: 0%;
	width: 100vw;
	height: 100vh;
	padding: 30px 0 0 0;
	background: ${(p) => p.theme.colors.white};
	z-index: 1000;
`;

export const ButtonClosePosition = styled.div`
	position: absolute;
	top: 25px;
	right: 25px;
`;
