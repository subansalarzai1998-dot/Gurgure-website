import Container from "./Container";
import Button from "./Button";
import { Link } from "react-router-dom";

function ServicesCTA({ title, subtitle, buttonText }) {
  return (
    <section className="bg-gradient-to-r from-[#1E2A5A] to-[#2e7d32] text-white py-20 text-center">
      <Container>
        <h2 className="text-3xl font-bold">{title}</h2>

        <p className="mt-4 text-gray-200">{subtitle}</p>
        <div className="mt-6 bg-">
          <Link to={"/contact"}>
            <Button variant="secondary">{buttonText}</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default ServicesCTA;
