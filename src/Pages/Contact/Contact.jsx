import React from "react";
import MainLayout from "../../components/ui/Layout/MainLayout";
import PageHero from "../../components/ui/PageHero";
import Container from "../../components/ui/Container";
import ContactInfo from "../../components/contact/ContactInfo";
import ContactForm from "../../components/contact/ContactForm";
import ContactMap from "../../components/contact/ContactMap";
import CTA from "../../components/ui/CTA";
const Contact = () => {
  return (
    <div>
      <MainLayout>
        <PageHero
          to={"/portfolio"}
          title="Let’s Connect"
          subtitle="Ready to transform your ideas into actionable systems and compelling brands?"
          buttonText="View all projects"
        />
        <section className="py-20 bg-gray-50">
          <Container>
            <ContactInfo />

            <div className="grid md:grid-cols-2 gap-5 mt-16 ">
              <ContactForm />

              <div className="flex flex-col justify-center m-0 bg-gradient-to-r from-[#1E2A5A] to-[#2e7d32] rounded">
                <CTA
                  title={"Let’s discuss your project"}
                  subtitle={
                    "Tell us about your needs and we’ll get back to you with a tailored solution."
                  }
                  buttonText={"Whtsapp"}
                />
              </div>
            </div>

            <ContactMap />
          </Container>
        </section>
      </MainLayout>
    </div>
  );
};

export default Contact;
