function Section({ children, bg = "bg-white" }) {
  return <section className={`${bg} py-20`}>{children}</section>;
}

export default Section;
