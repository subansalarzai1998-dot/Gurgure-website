import MainLayout from "../../components/ui/Layout/MainLayout";
import PageHero from "../../components/ui/PageHero";
import Container from "../../components/ui/Container";
import ServicesGrid from "../../components/Services/ServicesGrid";
import ServicesDetails from "../../components/Services/ServicesDetails";
import CTA from "../../components/ui/CTA";

function Services() {
  return (
    <MainLayout>
      <PageHero
        to={"/contact"}
        title="What we do"
        subtitle="End-to-end solutions across strategy, creative, and technology."
        buttonText="Contact Us"
      />

      <section className="py-20">
        <Container>
          <ServicesGrid />
          <ServicesDetails />
        </Container>
      </section>

      <CTA
        to={"/contact"}
        title={"Let’s Build Something Together"}
        subtitle={"Contact us today to discuss your project."}
        buttonText={"Contact Us"}
      />
    </MainLayout>
  );
}

export default Services;
