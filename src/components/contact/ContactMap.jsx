function ContactMap() {
  return (
    <div className="grid md:grid-cols-2 gap-8 mt-16">
      <iframe
        src="https://maps.google.com/maps?q=Kabul&t=&z=13&ie=UTF8&iwloc=&output=embed"
        className="w-full h-64 rounded-xl"
      ></iframe>

      <iframe
        src="https://maps.google.com/maps?q=Kandahar&t=&z=13&ie=UTF8&iwloc=&output=embed"
        className="w-full h-64 rounded-xl"
      ></iframe>
    </div>
  );
}

export default ContactMap;
