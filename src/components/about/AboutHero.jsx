import { motion } from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";

function AboutHero() {
  return (
    <section className="relative py-32 text-white text-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="/hero.jpg" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold">About GURGURE</h1>

          <p className="mt-6 text-gray-200">
            Driving strategic growth and digital transformation through
            integrated solutions.
          </p>

          <div className="mt-8">
            <Button>Contact Us</Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default AboutHero;
