import React from "react";
import { StiledMain } from "./Layout.styled";

export const Layout = ({ children }) => {
	return <StiledMain>{children}</StiledMain>;
};
