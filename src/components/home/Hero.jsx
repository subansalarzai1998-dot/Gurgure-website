import { motion } from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative py-55  text-white">
      {/* 🖼️ Background Image */}
      <div className="absolute inset-0">
        <img
          src="/background.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />

        {/* 🔥 Dark overlay (IMPORTANT for readability) */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* 🧠 Content */}
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Integrated Strategy. Creative Vision. Digital Reality.
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            GURGURE is a Kabul-based multidisciplinary consultancy delivering
            end-to-end solutions in management consulting, creative design, and
            ICT engineering.
          </p>

          <div className="mt-8 flex gap-4">
            <Link to={"/services"}>
              <Button>Explore Services</Button>
            </Link>
            <Link to={"/contact"}>
              <Button variant="secondary">Contact Us</Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;
