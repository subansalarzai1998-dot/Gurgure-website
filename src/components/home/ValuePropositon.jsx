import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Section from "../ui/Section";
import VennDiagram from "./VennDiagram";

function ValueProposition() {
  return (
    <Section>
      <Container>
        <SectionTitle
          title="Where Strategy, Technology, and Visual Communication Converge."
          subtitle=""
        />

        <p className="text-center max-w-3xl mx-auto text-gray-600">
          We operate at the intersection of analytical rigor and creative
          innovation. We transform concepts into actionable systems, compelling
          narratives, and sustainable digital infrastructures.
        </p>
        <VennDiagram />
      </Container>
    </Section>
  );
}

export default ValueProposition;
