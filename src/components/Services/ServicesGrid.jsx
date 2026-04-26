import { motion } from "framer-motion";
import {
  Briefcase,
  Palette,
  Code,
  Server,
  Database,
  Presentation,
} from "lucide-react";

const services = [
  { title: "Strategic Advisory", icon: Briefcase },
  { title: "Creative Design", icon: Palette },
  { title: "Software Development", icon: Code },
  { title: "ICT Infrastructure", icon: Server },
  { title: "Hosting Solutions", icon: Database },
  { title: "Corporate Communication", icon: Presentation },
];

function ServicesGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {services.map((service, i) => {
        const Icon = service.icon;

        return (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition text-center"
          >
            <Icon size={40} className="mx-auto text-[#2E7D32]" />

            <h3 className="mt-4 font-bold text-lg">{service.title}</h3>

            <p className="text-gray-500 mt-2 text-sm">
              High-quality professional solutions tailored to your needs.
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}

export default ServicesGrid;
