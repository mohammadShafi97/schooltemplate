import {
  FiBookOpen,
  FiMapPin,
  FiPhone,
  FiMail,
  FiBox,
} from "react-icons/fi";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-white text-primary-600 p-2 rounded-xl">
                <FiBookOpen size={28} />
              </div>
              <div>
                <span className="block font-bold text-xl leading-none text-white">
                  Little Flower
                </span>
                <span className="block text-xs font-semibold tracking-widest uppercase text-primary-200 mt-1">
                  Intl. School
                </span>
              </div>
            </Link>
            <p className="text-primary-200 text-sm leading-relaxed mt-4">
              Empowering young minds through innovative education, holistic
              development, and a vibrant community.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-primary-200 hover:text-white transition-colors"
                aria-label="Archive"
              >
                <FiBox size={20} />
              </a>
              <a
                href="#"
                className="text-primary-200 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-primary-200 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-primary-200 hover:text-white transition-colors"
                aria-label="Youtube"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-accent rounded-full inline-block"></span>{" "}
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-primary-200 hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#academics"
                  className="text-primary-200 hover:text-white transition-colors cursor-pointer"
                >
                  Academics
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary-200 hover:text-white transition-colors cursor-pointer"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-accent rounded-full inline-block"></span>{" "}
              Programs
            </h3>
            <ul className="space-y-3">
              <li className="text-primary-200 cursor-pointer hover:text-white transition-colors">
                Kindergarten
              </li>
              <li className="text-primary-200 cursor-pointer hover:text-white transition-colors">
                Primary School
              </li>
              <li className="text-primary-200 cursor-pointer hover:text-white transition-colors">
                Middle School
              </li>
              <li className="text-primary-200 cursor-pointer hover:text-white transition-colors">
                High School
              </li>
              <li className="text-primary-200 cursor-pointer hover:text-white transition-colors">
                Extra Curricular
              </li>
            </ul>
          </div>

          {/* Contact Group */}
          <div>
            <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-accent rounded-full inline-block"></span>{" "}
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-primary-200">
                <FiMapPin className="text-accent shrink-0 mt-1" size={20} />
                <span className="text-sm">
                  123 Education Boulevard, Knowledge City, State, 12345
                </span>
              </div>
              <div className="flex items-center gap-3 text-primary-200">
                <FiPhone className="text-accent shrink-0" size={20} />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-primary-200">
                <FiMail className="text-accent shrink-0" size={20} />
                <span className="text-sm">admissions@littleflower.edu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-400">
          <p>
            © {new Date().getFullYear()} Little Flower International School. All
            rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
