import Button from "../ui/Button";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Strategic Plan",
    image: "/project-1.png",
  },
  {
    title: "Branding System",
    image: "/project-2.png",
  },
  {
    title: "LMS Platform",
    image: "/project-3.jpg",
  },
  {
    title: "Network Infrastructure",
    image: "/project-4.jpg",
  },
];

function PortfolioPreview() {
  return (
    <Section>
      <Container>
        <SectionTitle title={"Featured Work"} />

        <div className="grid md:grid-cols-4 gap-6 relative">
          {projects.map((project, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <p className="text-white font-semibold text-lg">
                    {project.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link to={"/portfolio"}>
            <Button variant="secondary">View All Projects</Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}

export default PortfolioPreview;
