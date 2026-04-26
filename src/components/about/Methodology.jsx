import { motion } from "framer-motion";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

const steps = [
  { title: "Analyze", desc: "Research & feasibility" },
  { title: "Design", desc: "Strategy & concepts" },
  { title: "Develop", desc: "Build systems" },
  { title: "Deliver", desc: "Launch & optimize" },
];

function Methodology() {
  return (
    <Section>
      <Container>
        <SectionTitle title={"Our Approach"} />

        <div className="relative">
          {/* Line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-[#2E7D32]"></div>

          <div className="grid md:grid-cols-4 gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="text-center relative"
              >
                {/* Circle */}
                <div className="w-16 h-16 bg-[#2E7D32] text-white rounded-full flex items-center justify-center mx-auto mb-4 z-10 relative shadow-lg">
                  {i + 1}
                </div>

                <h3 className="font-bold text-lg">{step.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Methodology;
