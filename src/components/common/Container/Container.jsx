import { motion } from "framer-motion";
import React, { forwardRef } from "react";
import { StyledContainer } from "./Container.styled";

export const Container = forwardRef(({ children }, ref) => {
	return <StyledContainer ref={ref}>{children}</StyledContainer>;
});

export const MContainer = motion(Container);
