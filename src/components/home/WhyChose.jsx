import { CheckCircle, Users, Briefcase, Globe } from "lucide-react";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

const features = [
  {
    title: "End-to-End Solutions",
    desc: "From strategy to execution, we deliver complete solutions.",
    icon: <CheckCircle />,
  },
  {
    title: "Local Expertise",
    desc: "Kabul-based with strong regional understanding.",
    icon: <Globe />,
  },
  {
    title: "Multidisciplinary Team",
    desc: "Consultants, designers, and engineers working together.",
    icon: <Users />,
  },
  {
    title: "Proven Track Record",
    desc: "Trusted by NGOs, businesses, and institutions.",
    icon: <Briefcase />,
  },
];

function WhyChoose() {
  return (
    <Section bg="bg-gray-50">
      <Container>
        <SectionTitle
          title="Why Choose GURGURE"
          subtitle="Delivering value through expertise, innovation, and execution."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
            >
              <div className="text-[#2E7D32]">{item.icon}</div>

              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default WhyChoose;
