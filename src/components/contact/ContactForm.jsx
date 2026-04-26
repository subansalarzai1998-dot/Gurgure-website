import { motion } from "framer-motion";

function ContactForm() {
  return (
    <motion.form
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-white p-8 rounded-xl shadow-lg space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <input className="input" placeholder="Full Name *" />
        <input className="input" placeholder="Organization" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <input type="email" className="input" placeholder="Email Address *" />
        <input className="input" placeholder="Phone Number" />
      </div>

      <select className="input">
        <option>Service Area</option>
        <option>Strategy</option>
        <option>Creative</option>
        <option>Digital</option>
        <option>ICT</option>
      </select>

      <textarea
        rows="5"
        className="input"
        placeholder="Project Details"
      ></textarea>

      <button className="w-full bg-[#2E7D32] text-white py-3 rounded-lg hover:bg-[#256628] transition">
        Submit Request
      </button>
    </motion.form>
  );
}

export default ContactForm;
