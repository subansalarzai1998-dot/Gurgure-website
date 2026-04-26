function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      <h2 className="text-3xl font-bold text-[#1E2A5A]">{title}</h2>

      {/* 🔥 Decorative line */}
      <div className="w-16 h-1 bg-[#2E7D32] mx-auto mt-3 rounded-full"></div>

      <p className="text-gray-500 mt-4">{subtitle}</p>
    </div>
  );
}

export default SectionTitle;
