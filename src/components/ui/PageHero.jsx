import { motion } from "framer-motion";
import Container from "./Container";
import Button from "./Button";
import { Link } from "react-router-dom";

function PageHero({ title, subtitle, buttonText, to }) {
  return (
    <section className="relative py-32 text-white text-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="/background.jpg" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>

          <p className="mt-6 text-gray-200">{subtitle}</p>

          {buttonText && (
            <div className="mt-8">
              <Link to={to}>
                <Button variant="secondary">{buttonText}</Button>
              </Link>
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}

export default PageHero;
