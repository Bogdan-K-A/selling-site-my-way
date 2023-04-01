import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

// map
import { Icon } from "leaflet";
import { Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { MContainer } from "../common/Container/Container";
import { Title } from "../ui-component/Title/Title";

import { StyledItem, StyledList, StyledMap } from "./Location.styled";

const animationLeft = {
	hidden: {
		x: -300,
		opacity: 0,
	},
	visible: (custom) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
};
const animationRight = {
	hidden: {
		x: 300,
		opacity: 0,
	},
	visible: (custom) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
};

export const Location = () => {
	const position = [46.52428262072865, 6.633050444374937];

	const customIcon = new Icon({
		iconUrl: "./images/Design@2x.png",
		iconSize: [33, 30],
	});

	return (
		<MContainer
			initial="hidden"
			whileInView="visible"
			viewport={{ amount: 0.2, once: true }}>
			<motion.div custom={1} variants={animationLeft}>
				<Box sx={{ display: "flex", alignItem: "center" }}>
					<Title margin="0 auto 30px">Location</Title>
				</Box>
			</motion.div>
			<motion.div custom={2} variants={animationRight}>
				<StyledList>
					<StyledItem>Burger Factory</StyledItem>
					<StyledItem>Pl. de la Riponne 10</StyledItem>
					<StyledItem>1005 Lausanne</StyledItem>
					<StyledItem>021 800 00 00</StyledItem>
				</StyledList>

				<StyledMap center={position} zoom={16}>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors...'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
					<Marker position={position} icon={customIcon}>
						<Popup>
							<h2>Burger Factory</h2>
							<p>Pl. de la Riponne 10</p>
							<p>1005 Lausanne</p>
						</Popup>
					</Marker>
				</StyledMap>
			</motion.div>
		</MContainer>
	);
};
