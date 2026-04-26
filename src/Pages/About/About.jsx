import React from "react";
import MainLayout from "../../components/ui/Layout/MainLayout";
import SectionTitle from "../../components/ui/SectionTitle";
import AboutHero from "../../components/about/AboutHero";
import AboutContent from "../../components/about/AboutContenet";
import VisionMission from "../../components/about/VisionMission";
import Methodology from "../../components/about/Methodology";
import Team from "../../components/about/Team";
import PageHero from "../../components/ui/PageHero";

const About = () => {
  return (
    <div>
      <MainLayout>
        <PageHero
          to={"/contact"}
          buttonText={"Contact Us"}
          title={"About GURGURE"}
          subtitle={
            "Driving strategic growth and digital transformation through integrated solutions."
          }
        />
        <AboutContent />
        <VisionMission />
        <Methodology />
        <Team />
      </MainLayout>
    </div>
  );
};

export default About;
