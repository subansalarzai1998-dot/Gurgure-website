function Button({ children, variant = "primary" }) {
  const base = "px-6 py-3 ml-5 rounded-lg font-medium transition";

  const styles = {
    primary: "bg-[#1e2a5a] text-white hover:opacity-90",
    secondary: "bg-[#2e7d32] text-white hover:opacity-90",
    outline:
      "border border-[#1e2a5a] text-[#1e2a5a] hover:bg-[#1e2a5a] hover:text-white",
  };

  return <button className={`${base} ${styles[variant]}`}>{children}</button>;
}

export default Button;
