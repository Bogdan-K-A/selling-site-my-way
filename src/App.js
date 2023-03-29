import { useState } from "react";
import styled from "styled-components";

import { Section } from "./components/common/Section/Section.jsx";
import { Layout } from "./components/common/Layout/Layout.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { Ingredients } from "./components/Ingredients/Ingredients.jsx";
import { TheStory } from "./components/TheStory/TheStory.jsx";
import { Burgers } from "./components/Burgers/Burgers.jsx";
import { Location } from "./components/Location/Location.jsx";
import { Modal } from "./components/Modal/Modal.jsx";

import { bodyOveflow } from "./utils/bodyOveflow";

function App() {
	const [isOpenModal, setIsOpenModal] = useState(false);

	const openModal = () => {
		setIsOpenModal(true);
		bodyOveflow(isOpenModal);
	};

	const closeModal = () => {
		setIsOpenModal(false);
		bodyOveflow(isOpenModal);
	};

	return (
		<StyledApp>
			<Header openModal={openModal} />

			<Layout>
				<Section padding="0 0 75px 0" mobilePadding="0 0 37px 0">
					<Hero />
				</Section>
				<Section
					id="ingredient"
					padding="75px 0 75px 0"
					mobilePadding="37px 0 37px 0">
					<Ingredients />
				</Section>
				<Section
					id="story"
					padding="75px 0 75px 0"
					mobilePadding="37px 0 37px 0">
					<TheStory />
				</Section>
				<Section
					id="burgers"
					padding="75px 0 75px 0"
					mobilePadding="37px 0 37px 0">
					<Burgers openModal={openModal} />
				</Section>
				<Section
					id="location"
					padding="75px 0 150px 0"
					mobilePadding="37px 0 75px 0">
					<Location />
				</Section>
			</Layout>

			<Footer />
			{isOpenModal && <Modal closeModal={closeModal} />}
		</StyledApp>
	);
}

export default App;

/* --------------------------------- Styled --------------------------------- */

const StyledApp = styled.div`
	overflow: hidden;
	min-height: 100vh;
	display: grid;
	grid-template-rows: auto 1fr auto;
`;
