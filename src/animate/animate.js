import { Ingredients } from "../components/Ingredients/Ingredients";

// hero
export const animation = {
	hidden: {
		x: -500,
		opacity: 0,
	},
	visible: (custom) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
};

export const animationImg = {
	hidden: {
		x: 500,
		opacity: 0,
	},
	visible: (custom) => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
};

// Ingredients
export const animationLeft = {
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
export const animationRight = {
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

// Burgers
export const animationBurgers = {
	hidden: {
		y: 500,
		opacity: 0,
	},
	visible: (custom) => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
};
