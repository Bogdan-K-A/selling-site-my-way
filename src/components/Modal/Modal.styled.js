import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledModal = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px;
	background-color: ${(p) => p.theme.colors.white};
	border-radius: 15px;
	h3 {
		font-size: ${(p) => p.theme.fontSizes.fs20};
		font-weight: ${(p) => p.theme.fontWeights.bold};
		color: ${(p) =>
			p.error ? "red" : `${p.theme.colors.prymaryBtnColor}`};
		margin-bottom: 20px;
	}
`;

export const MessageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 20px;

	p {
		color: ${(p) => p.theme.colors.text};
		font-size: ${(p) => p.theme.fontSizes.fs16};

		&:nth-child(1) {
			margin-bottom: 10px;
		}
	}
`;
