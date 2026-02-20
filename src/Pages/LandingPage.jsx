import React from "react";
import Layout from "../Components/Layout";
import HeroSection from "../Sections/LandingPageSection/HeroSection";
import AboutusSection from "../Sections/LandingPageSection/AboutusSection";
import Enquirey from "../Sections/LandingPageSection/Enquirey";
import Courses from "../Sections/LandingPageSection/Courses";

function LandingPage() {
  return (
    <>
      <Layout>
        <HeroSection />
        <AboutusSection />
        <Courses/>
        <Enquirey />
      </Layout>
    </>
  );
}

export default LandingPage;
