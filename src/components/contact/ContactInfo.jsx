import { Phone, Mail, MapPin } from "lucide-react";

function ContactInfo() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-xl shadow text-center">
        <Phone className="mx-auto text-[#2E7D32]" size={28} />
        <p className="mt-3 font-semibold">Phone</p>
        <p className="text-gray-500">+93 700 777 480</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow text-center">
        <Mail className="mx-auto text-[#2E7D32]" size={28} />
        <p className="mt-3 font-semibold">Email</p>
        <p className="text-gray-500">info@gurgure.com</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow text-center">
        <MapPin className="mx-auto text-[#2E7D32]" size={28} />
        <p className="mt-3 font-semibold">Locations</p>
        <p className="text-gray-500">Kabul & Kandahar</p>
      </div>
    </div>
  );
}

export default ContactInfo;
