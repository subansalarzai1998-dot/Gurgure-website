import { motion } from "framer-motion";
import Container from "../ui/Container";
import Section from "../ui/Section";

function AboutContent() {
  return (
    <Section>
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold text-[#1E2A5A]">Who We Are</h2>

            <div className="w-16 h-1 bg-[#2E7D32] mt-3 mb-6 rounded-full"></div>

            <p className="text-gray-600 leading-8">
              GURGURE is a Kabul-based multidisciplinary consultancy delivering
              strategic growth, operational efficiency, and digital
              transformation.
            </p>

            <p className="mt-4 text-gray-600 leading-8">
              By integrating management consulting, creative design, and ICT
              engineering, we create end-to-end solutions that turn ideas into
              real-world impact.
            </p>

            {/* Highlights */}
            <div className="mt-6 space-y-3">
              <p>✔ Strategic thinking + execution</p>
              <p>✔ Integrated digital solutions</p>
              <p>✔ Scalable systems & infrastructure</p>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <img src="/about.jpg" className="rounded-xl shadow-lg" />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

export default AboutContent;
