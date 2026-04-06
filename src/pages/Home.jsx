import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FiArrowRight, FiBookOpen, FiUsers, FiGlobe, 
  FiStar, FiMapPin, FiPhone, FiMail 
} from 'react-icons/fi';
import { 
  FaBuilding, FaFlask, FaBookReader, 
  FaLandmark, FaStethoscope 
} from 'react-icons/fa';
import { FiMusic } from 'react-icons/fi'; // separate import just in case

const Home = () => {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className="w-full">
      {/* 1. HERO SECTION (REVERTED) */}
      <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-primary-900">
        {/* Parallax Background */}
        <motion.div
          style={{ y: yBg }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src="/assets/hero_bg.png" 
            alt="School Campus" 
            className="object-cover w-full h-full opacity-60 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/60 via-primary-900/40 to-primary-900/90"></div>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-8 shadow-2xl backdrop-blur-md bg-white/10 border border-white/20"
          >
            <FiStar className="text-accent h-[18px] w-[18px]" />
            <span className="text-sm font-bold tracking-widest text-[#f8fafc] uppercase">Admissions Open 2026-2027</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-8 drop-shadow-2xl"
          >
            Nurturing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#93c5fd] to-accent drop-shadow-none">Brilliance.</span><br />
            Inspiring Futures.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-primary-100 max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow-md font-medium"
          >
            Welcome to Little Flower International School. Experience a holistic approach to education where modern learning meets timeless values.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <button className="bg-accent text-white px-10 py-4 rounded-full font-bold shadow-[0_0_40px_rgba(244,63,94,0.4)] hover:shadow-[0_0_60px_rgba(244,63,94,0.6)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2 text-lg">
              Explore Campus <FiArrowRight size={22} />
            </button>
            <button className="glass text-white px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all text-lg tracking-wide border border-white/40 shadow-xl backdrop-blur-md">
              Academic Programs
            </button>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
        >
          <div className="w-[32px] h-[54px] rounded-full border-2 border-white/50 flex justify-center p-2 shadow-sm">
            <div className="w-1.5 h-3 bg-white rounded-full"></div>
          </div>
        </motion.div>
        
        {/* Custom CSS for gradient text drop-shadow hack since bg-clip-text removes shadow */}
        <style dangerouslySetInnerHTML={{__html: `
          h1 span.text-transparent {
             filter: drop-shadow(0 4px 6px rgba(0,0,0,0.5));
          }
        `}} />
      </section>

      {/* 2. ABOUT US SECTION (NEW) */}
      <section id="about" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary-50 to-transparent -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative w-full aspect-[4/5] lg:aspect-auto lg:h-[600px]"
            >
              <div className="absolute inset-0 bg-primary-600/10 rounded-[3rem] transform -rotate-3 scale-105 transition-transform duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
                alt="School Building" 
                className="relative rounded-[3rem] shadow-2xl object-cover h-full w-full z-10"
              />
              <div className="absolute -bottom-8 -right-8 glass-dark p-8 rounded-3xl z-20 shadow-2xl hidden md:block backdrop-blur-xl bg-primary-900/90 max-w-[250px]">
                <p className="text-xl font-bold text-white leading-snug">Empowering minds since 2005.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 space-y-8"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
                Our <span className="text-primary-600">Story.</span>
              </h2>
              <p className="text-slate-600 text-xl leading-relaxed font-medium">
                Established with a vision to create a conducive environment for holistic learning, Little Flower focuses on nurturing self-reliant, confident, and responsible global citizens.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                We blend traditional moral values with a progressive, modern curriculum. Our educators are dedicated to finding and polishing the unique potential hidden within every child, ensuring they are fully equipped for the challenges of tomorrow.
              </p>
              <div className="pt-4 flex gap-8">
                 <div>
                    <h4 className="text-4xl font-black text-accent drop-shadow-sm mb-1">400+</h4>
                    <span className="font-semibold text-slate-500 uppercase tracking-widest text-sm">Students</span>
                 </div>
                 <div>
                    <h4 className="text-4xl font-black text-primary-600 drop-shadow-sm mb-1">50+</h4>
                    <span className="font-semibold text-slate-500 uppercase tracking-widest text-sm">Expert Faculty</span>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US / FACILITIES */}
      <section className="py-32 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">World-Class <span className="text-accent relative inline-block">Facilities<svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 5.5C52.5 -1.5 148.5 -1.5 197.5 5.5" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round"/></svg></span></h2>
            <p className="text-slate-600 text-xl font-medium max-w-2xl mx-auto mt-8">
              Our campus is equipped with state-of-the-art amenities to stimulate learning, creativity, and physical health.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {[
              { id: 1, icon: FaBuilding, title: 'Smart Classrooms', desc: 'Interactive panels and modern learning tools connected to the cloud.', color: 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white' },
              { id: 2, icon: FaFlask, title: 'Science Labs', desc: 'Fully equipped physics, chemistry, and biology labs for hands-on learning.', color: 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white' },
              { id: 3, icon: FaBookReader, title: 'Intl. Library', desc: 'Over 10,000+ volumes of diverse books and extensive digital media.', color: 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white' },
              { id: 4, icon: FaLandmark, title: 'Sports Complex', desc: 'Indoor & outdoor stadiums designed for holistic physical growth.', color: 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white' },
              { id: 5, icon: FaStethoscope, title: 'Health Clinic', desc: 'Dedicated school nurse and state-of-the-art nutritional labs.', color: 'bg-rose-100 text-rose-600 group-hover:bg-rose-600 group-hover:text-white' },
              { id: 6, icon: FiMusic, title: 'Arts & Music Studio', desc: 'Fostering creativity, emotional expression, and artistic mastery.', color: 'bg-cyan-100 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white' }
            ].map((facility, index) => (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-white p-10 rounded-[2rem] border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 text-left cursor-pointer"
              >
                <div className={`w-16 h-16 ${facility.color} transition-colors duration-500 rounded-2xl flex items-center justify-center mb-8 shadow-sm`}>
                  <facility.icon size={30} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{facility.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed font-medium">{facility.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ACADEMICS SECTION (NEW) */}
      <section id="academics" className="py-32 bg-primary-900 relative">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">Academic <span className="text-accent">Excellence</span></h2>
            <p className="text-primary-200 text-xl font-medium max-w-2xl mx-auto mt-6">
              A comprehensive educational journey from early childhood to young adulthood, designed to maximize student potential.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Program 1 */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-[2rem] hover:bg-white/20 transition-all"
             >
                <div className="w-16 h-16 bg-accent text-white rounded-2xl flex items-center justify-center mb-6">
                   <FiBookOpen size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Kindergarten</h3>
                <p className="text-primary-100 text-lg">Focuses on sensory development, play-based learning, and foundational social skills.</p>
             </motion.div>

             {/* Program 2 */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-[2rem] hover:bg-white/20 transition-all"
             >
                <div className="w-16 h-16 bg-blue-500 text-white rounded-2xl flex items-center justify-center mb-6">
                   <FiUsers size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Primary & Middle</h3>
                <p className="text-primary-100 text-lg">Building strong academic fundamentals while encouraging curiosity and independent thought.</p>
             </motion.div>

             {/* Program 3 */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-[2rem] hover:bg-white/20 transition-all"
             >
                <div className="w-16 h-16 bg-emerald-500 text-white rounded-2xl flex items-center justify-center mb-6">
                   <FiGlobe size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">High School</h3>
                <p className="text-primary-100 text-lg">Rigorous preparation for university, focusing on leadership, specialized subjects, and global readiness.</p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION (NEW) */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 tracking-tight">Get In <span className="text-primary-600">Touch</span></h2>
            <p className="text-slate-600 text-xl font-medium max-w-2xl mx-auto mt-4">
              Have questions about admissions or want to schedule a visit? We're here to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
             {/* Contact Info */}
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-10"
             >
                <div className="flex items-start gap-6">
                   <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-2xl flex justify-center items-center shrink-0 shadow-sm border border-primary-100">
                      <FiMapPin size={24} />
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-2">Campus Location</h4>
                      <p className="text-slate-600 text-lg">123 Education Boulevard,<br/>Knowledge City, State, 12345</p>
                   </div>
                </div>

                <div className="flex items-start gap-6">
                   <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-2xl flex justify-center items-center shrink-0 shadow-sm border border-primary-100">
                      <FiPhone size={24} />
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-2">Phone</h4>
                      <p className="text-slate-600 text-lg">+1 (555) 123-4567<br/>+1 (555) 987-6543</p>
                   </div>
                </div>

                <div className="flex items-start gap-6">
                   <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-2xl flex justify-center items-center shrink-0 shadow-sm border border-primary-100">
                      <FiMail size={24} />
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-2">Email</h4>
                      <p className="text-slate-600 text-lg">admissions@littleflower.edu<br/>info@littleflower.edu</p>
                   </div>
                </div>
             </motion.div>

             {/* Form */}
             <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-[#f8fafc] p-10 rounded-[2rem] border border-slate-200 shadow-xl"
             >
                <form className="space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">First Name</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Last Name</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="Doe" />
                      </div>
                   </div>
                   
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Email Address</label>
                      <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="john@example.com" />
                   </div>

                   <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Message</label>
                      <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none" placeholder="How can we help you?"></textarea>
                   </div>

                   <button type="button" className="w-full bg-primary-600 text-white font-bold text-lg py-4 rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30">
                     Send Message
                   </button>
                </form>
             </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};
export default Home;
