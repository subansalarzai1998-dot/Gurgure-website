import Container from "../ui/Container";
import Section from "../ui/Section";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

import {
  Briefcase,
  Palette,
  Code,
  Server,
  Globe,
  Presentation,
} from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

const services = [
  { title: "Strategic Management", icon: <Briefcase /> },
  { title: "Creative Design", icon: <Palette /> },
  { title: "Software Development", icon: <Code /> },
  { title: "ICT Infrastructure", icon: <Server /> },
  { title: "Hosting Solutions", icon: <Globe /> },
  { title: "Corporate Communication", icon: <Presentation /> },
];

function ServicesPreview() {
  return (
    <Section bg="bg-gray-50">
      <Container>
        <SectionTitle title={"Our Secrvices"} />

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="text-[#2E7D32] mb-4">{service.icon}</div>
              <h3 className="font-semibold text-lg">{service.title}</h3>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link to={"/services"}>
            <Button variant="secondary">View All Projects</Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}

export default ServicesPreview;
