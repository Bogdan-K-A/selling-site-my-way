import styled from "styled-components";
import { Section } from "./components/common/Section/Section.jsx";
import { Layout } from "./components/common/Layout/Layout.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { Trainer } from "./components/Trainer/Trainer.jsx";
import { About } from "./components/About/About.jsx";
import { Format } from "./components/Format/Format.jsx";
import { TheStory } from "./components/TheStory/TheStory.jsx";
import { Reviews } from "./components/Reviews/Reviews.jsx";
import { BsTelegram } from "react-icons/bs";
import { Price } from "./components/Price/Price.jsx";
import { Format2 } from "./components/Format2/Format2.jsx";

function App() {
  return (
    <StyledApp>
      <Header />

      <Layout>
        <Section>
          <Hero />
        </Section>

        {/* My Way 4 тижні */}
        <Section
          id="format"
          padding="35px 0 40px 0"
          mobilePadding="35px 0 35px 0"
        >
          <TheStory />
        </Section>
        {/* My Way 10 км */}
        <Section padding="40px 0 40px 0" mobilePadding="35px 0 35px 0">
          <Format />
        </Section>

        {/* My Way 20 км */}
        <Section padding="40px 0 35px 0" mobilePadding="35px 0 35px 0">
          <Format2 />
        </Section>

        {/* тренер */}
        <Section id="trainer" padding="40px 0 " mobilePadding="57px 0 37px 0">
          <Trainer />
        </Section>

        <Section id="about" padding="0 0 75px 0" mobilePadding="0 0 37px 0">
          <About />
        </Section>

        {/* прайс */}
        <Section
          id="price"
          padding="35px 0 35px 0"
          mobilePadding="37px 0 37px 0"
        >
          <Price />
        </Section>

        {/* отзывы */}
        <Section
          id="reviews"
          padding="75px 0 150px 0"
          mobilePadding="37px 0 75px 0"
        >
          <Reviews />
        </Section>

        {/* <StyledTgLink href="https://t.me/baskarabas">
          <BsTelegram size={60} />
        </StyledTgLink> */}
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

// const StyledTgLink = styled.a`
//   display: flex;
//   align-items: center;
//   border-radius: 50%;
//   position: fixed;
//   bottom: 60px;
//   right: 10px;
//   color: #007aff;
//   z-index: 999;
//   background: #fff;
//   border: 1px solid #007aff;
// `;
