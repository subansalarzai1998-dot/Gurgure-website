function VennDiagram() {
  return (
    <div className="relative w-[360px] h-[320px] mx-auto mt-12">
      {/* Circle 1 */}
      <div className="absolute w-48 h-48 bg-[#1E2A5A]/70 text-white flex items-center justify-center rounded-full left-0 top-0">
        Strategy
      </div>

      {/* Circle 2 */}
      <div className="absolute w-48 h-48 bg-[#2E7D32]/70 text-white flex items-center justify-center rounded-full right-0 top-0">
        Technology
      </div>

      {/* Circle 3 */}
      <div className="absolute w-48 h-48 bg-[#00A8A8]/70 text-white flex items-center justify-center rounded-full left-1/2 -translate-x-1/2 bottom-0">
        Creative
      </div>
    </div>
  );
}

export default VennDiagram;
