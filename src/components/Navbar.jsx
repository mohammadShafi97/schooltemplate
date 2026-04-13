import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiBookOpen } from "react-icons/fi";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "#home" },
    { name: "Legacy", path: "#legacy" },
    { name: "Pillars", path: "#pillars" },
    { name: "About", path: "#about" },
    { name: "Contact", path: "#contact" },
  ];

  const handleSmoothScroll = (e, path) => {
    e.preventDefault();
    setIsOpen(false);

    // Smooth scroll to the target section
    const element = document.querySelector(path);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // offset for fixed navbar
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg py-3"
          : "bg-white/90 backdrop-blur-md shadow-lg py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a
            href="#home"
            onClick={(e) => handleSmoothScroll(e, "#home")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <img src="/logo.png" alt="logo" className="w-16 object-cover" />
            <img src="/logo-2.png" alt="logo-2" className="w-44" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleSmoothScroll(e, link.path)}
                className={`font-medium transition-colors hover:text-accent cursor-pointer ${
                  scrolled ? "text-slate-700" : "text-slate-700"
                }`}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-accent text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
              Admissions Open
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? "text-slate-800" : "text-slate-800"} focus:outline-none`}
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full border-t border-slate-100"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleSmoothScroll(e, link.path)}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-800 hover:text-accent hover:bg-slate-50"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-3">
              <button className="w-full bg-accent text-white px-4 py-3 rounded-full font-semibold shadow-md inline-block text-center mt-2">
                Apply Now
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};
export default Navbar;
