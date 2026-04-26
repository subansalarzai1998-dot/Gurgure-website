import Container from "../../ui/Container";

import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-300 pt-16">
      <Container>
        <div className="grid justify-center  md:grid-cols-4 gap-10">
          {/* 1. BRAND */}
          <div>
            <h2 className="text-2xl font-bold text-white">GURGURE</h2>
            <p className="mt-4 text-gray-400">
              Making Visible Brands. Delivering integrated strategy, design, and
              digital solutions.
            </p>
          </div>

          {/* 2. QUICK LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to={"/"}>
                  <a href="/" className="hover:text-white">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link to={"/about"}>
                  <a href="/about" className="hover:text-white">
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link to={"/services"}>
                  <a href="/services" className="hover:text-white">
                    Services
                  </a>
                </Link>
              </li>
              <li>
                <Link to={"/portfolio"}>
                  <a href="/portfolio" className="hover:text-white">
                    Portfolio
                  </a>
                </Link>
              </li>
              <li>
                <Link to={"/contact"}>
                  <a href="/contact" className="hover:text-white">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. SERVICES */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Strategic Advisory</li>
              <li>Creative Design</li>
              <li>Software Development</li>
              <li>ICT Infrastructure</li>
              <li>Hosting Solutions</li>
            </ul>
          </div>

          {/* 4. CONTACT */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>

            <p>📍 Kabul & Kandahar</p>
            <p className="mt-2">📞 +93 700 777 480</p>
            <p className="mt-2">📧 info@gurgure.com</p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4"></div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2026 GURGURE. All rights reserved.</p>

          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
