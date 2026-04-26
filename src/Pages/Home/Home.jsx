import React from "react";
import MainLayout from "../../components/ui/Layout/MainLayout";
import Hero from "../../components/home/Hero";
import ValueProposition from "../../components/home/ValuePropositon";
import ServicesPreview from "../../components/home/ServicesPreview";
import PortfolioPreview from "../../components/home/PortfolioPreview";
import WhyChoose from "../../components/home/WhyChose";

const Home = () => {
  return (
    <div>
      <MainLayout>
        <Hero />
        <ValueProposition />
        <ServicesPreview />
        <PortfolioPreview />
        <WhyChoose />
      </MainLayout>
    </div>
  );
};

export default Home;
