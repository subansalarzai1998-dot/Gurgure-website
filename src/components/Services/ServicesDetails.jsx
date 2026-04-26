import { useState } from "react";

const data = [
  {
    title: "Strategic Management & Advisory",
    content:
      "Strategic planning and organizational, developmentBusiness planning and feasibility studies, Proposal development and technical",
  },
  {
    title: "Creative Design & Media Solutions",
    content:
      "Branding and corporate identity development,Logo design and visual systems,Graphic design for promotional materials,2D and 3D design services,Professional product photography,360° virtual tours,Media conversion and digital content production,Social media campaigns and sponsorship activation",
  },
  {
    title: "Digital Systems & Software Development",
    content:
      "Website design and development,Learning Management Systems (LMS),Database design and development,Custom system design and development,Enterprise Resource Planning (ERP) solutions.",
  },
  {
    title: "ICT Infrastructure & Consulting",
    content:
      "LAN and WAN network design,ICT consulting and system architecture,Network implementation and optimization,Enterprise-level digital infrastructure planning,",
  },
  {
    title: "Hosting & Digital Infrastructure",
    content:
      "Shared hosting and VPS solutions, Server deployment and management, Platform maintenance and support",
  },
  {
    title: "Corporate Communication & Presentation Design",
    content:
      "Corporate pitch development, Investor decks and presentations, Professional slide design and storytelling,Portfolio / Projects.GURGURE has contributed to a diverse range of projects across sectors, including private enterprises, developmentorganizations, and educational institutions. Its portfolio reflects a commitment to quality, innovation, and impact",
  },
];

function ServicesDetails() {
  const [active, setActive] = useState(null);

  return (
    <div className="max-w-3xl mx-auto mt-16">
      {data.map((item, i) => (
        <div key={i} className="border-b py-4">
          <button
            onClick={() => setActive(active === i ? null : i)}
            className="w-full text-left font-semibold flex justify-between"
          >
            {item.title}
            <span>{active === i ? "-" : "+"}</span>
          </button>

          {active === i && <p className="mt-3 text-gray-600">{item.content}</p>}
        </div>
      ))}
    </div>
  );
}

export default ServicesDetails;
