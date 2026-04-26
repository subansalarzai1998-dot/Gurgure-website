import { useState } from "react";
import React from "react";
import MainLayout from "../../components/ui/Layout/MainLayout";
import PageHero from "../../components/ui/PageHero";
import Container from "../../components/ui/Container";
import PortfolioFilter from "../../components/portfolio/PortfolioFilter";
import PortfolioGrid from "../../components/portfolio/PortfolioGrid";
import CTA from "../../components/ui/CTA";
const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  return (
    <div>
      <MainLayout>
        <PageHero
          to={"/contact"}
          title={"Our Work"}
          subtitle={"A commitment to quality, innovation, and impact."}
          buttonText={"Contact us"}
        />
        <section className="py-20">
          <Container>
            <PortfolioFilter setActive={setFilter} />

            <PortfolioGrid filter={filter} />
          </Container>
        </section>
        <CTA
          title={"Let’s Build Something Together"}
          subtitle={"Contact us today to discuss your project."}
          buttonText={"Contact Us"}
        />
      </MainLayout>
    </div>
  );
};

export default Portfolio;
