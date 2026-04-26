import Navbar from "../../home/layout/Navbar";
import Footer from "../../home/layout/Footer";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
