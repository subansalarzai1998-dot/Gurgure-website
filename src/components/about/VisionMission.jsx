import { Target, Eye } from "lucide-react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

function VisionMission() {
  return (
    <Section bg="bg-gray-50">
      <SectionTitle title={"Vision & Mission"} />
      <Container>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Vision */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition"
          >
            <Eye className="text-[#2E7D32] mb-4" size={32} />
            <h3 className="text-xl font-bold text-[#1E2A5A]">Vision</h3>
            <p className="mt-4 text-gray-600">
              To become a leading regional consultancy recognized for delivering
              integrated strategic, creative, and technological solutions that
              drive sustainable development and institutional excellence.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition"
          >
            <Target className="text-[#2E7D32] mb-4" size={32} />
            <h3 className="text-xl font-bold text-[#1E2A5A]">Mission</h3>

            <p className="mt-4 text-gray-600">
              To empower organizations through evidence-based strategic planning
              and advisory services. To design innovative and impactful visual
              and digital solutions that enhance communication and brand
              identity. To develop robust ICT systems and infrastructures that
              support efficiency, scalability, and long-term growth.
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

export default VisionMission;
