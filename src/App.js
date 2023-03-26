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

function App() {
	return (
		<StyledApp>
			<Header />

			<Layout>
				<Section padding="0 0 75px 0">
					<Hero />
				</Section>
				<Section id="ingredient" padding="75px 0 75px 0">
					<Ingredients />
				</Section>
				<Section id="story" padding="75px 0 75px 0">
					<TheStory />
				</Section>
				<Section id="burgers" padding="75px 0 75px 0">
					<Burgers />
				</Section>
				<Section id="location" padding="75px 0 150px 0">
					<Location />
				</Section>
			</Layout>

			<Footer />
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
