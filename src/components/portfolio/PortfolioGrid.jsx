import { motion } from "framer-motion";
import projects from "../../data/projects";

function PortfolioGrid({ filter }) {
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {filtered.map((project, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.03 }}
          className="relative group overflow-hidden rounded-xl shadow-lg"
        >
          {/* Image */}
          <img src={project.image} className="w-full h-64 object-cover" />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-white text-center p-4">
            <h3 className="font-bold text-lg">{project.title}</h3>

            <p className="text-sm mt-2">{project.outcome}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default PortfolioGrid;
