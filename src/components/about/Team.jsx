import { motion } from "framer-motion";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

const team = [
  { name: "Team Member", role: "Strategist", img: "/team-1.jpg" },
  { name: "Team Member", role: "Designer", img: "/team-2.jpg" },
  { name: "Team Member", role: "Engineer", img: "/team-3.jpg" },
];

function Team() {
  return (
    <Section bg="bg-gray-50">
      <Container>
        <SectionTitle title={"Our Team"} />

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl overflow-hidden shadow"
            >
              <img src={member.img} className="w-full h-56 object-cover" />

              <div className="p-6 text-center">
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Team;
