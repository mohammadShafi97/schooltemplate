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
    <footer className="bg-primary-900 text-white pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Call to action */}
        <div className="bg-primary-800 rounded-[2rem] p-8 md:p-12 mb-16 text-center border border-primary-700/50 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
           <div className="relative z-10 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Your Child <span className="text-accent">Belongs Here.</span></h2>
             <p className="text-primary-100 text-lg md:text-xl font-medium mb-8">
               Give your loved one the ultimate gift of a world-class, stress-free education. Entrust your child to us, and let us shape their bright, successful future together.
             </p>
             <div className="bg-white/10 inline-block px-4 py-2 rounded-full mb-8">
                <span className="text-white font-bold tracking-widest text-sm uppercase">Admissions Open for the Current Academic Year</span>
             </div>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <button className="bg-accent text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:bg-[#e11d48] transition-all">
                 Enquire Now
               </button>
               <button className="glass text-white px-8 py-4 rounded-xl font-bold border border-white/20 hover:bg-white/10 transition-all">
                 Contact Admission Counselor
               </button>
             </div>
             <p className="mt-8 text-primary-200 text-sm italic font-medium">"BE MAX KIDS & PUBLIC SCHOOL — Here, Your Child is Our Child."</p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-white text-primary-600 p-2 rounded-xl">
                <FiBookOpen size={28} />
              </div>
              <div>
                <span className="block font-bold text-xl leading-none text-white">
                  BE MAX
                </span>
                <span className="block text-xs font-semibold tracking-widest uppercase text-primary-200 mt-1">
                  KIDS & PUBLIC SCHOOL
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
                <span className="text-sm">admissions@bemax.edu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-400">
          <p>
            © {new Date().getFullYear()} BE MAX KIDS & PUBLIC SCHOOL. All
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
