import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FiArrowRight, FiBookOpen, FiUsers, FiGlobe, 
  FiStar, FiMapPin, FiPhone, FiMail, FiCheckCircle, FiShield, FiHeart
} from 'react-icons/fi';
import { 
  FaBuilding, FaFlask, FaBookReader, 
  FaLandmark, FaStethoscope, FaBrain, FaRobot, FaRunning
} from 'react-icons/fa';
import { FiMusic, FiAward } from 'react-icons/fi';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
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
            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" }} // Fallback if no hero_bg.png
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/60 via-primary-900/40 to-primary-900/90"></div>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center mt-16">
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
            Raising Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#93c5fd] to-accent drop-shadow-none">Leaders.</span><br />
            Grounded in Values.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-md font-medium"
          >
            Welcome to <strong>BE MAX KIDS & PUBLIC SCHOOL</strong>. A futuristic, stress-free learning ecosystem backed by the 12+ year legacy of the Bemax Group. We build confident, multi-lingual global citizens in a campus that feels exactly like a second home.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <button className="bg-accent text-white px-10 py-4 rounded-full font-bold shadow-[0_0_40px_rgba(244,63,94,0.4)] hover:shadow-[0_0_60px_rgba(244,63,94,0.6)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2 text-lg">
              Book a Campus Tour <FiArrowRight size={22} />
            </button>
            <button className="glass text-white px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all text-lg tracking-wide border border-white/40 shadow-xl backdrop-blur-md">
              Apply for Admissions
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

      {/* 2. THE BEMAX LEGACY (NEW) */}
      <section id="legacy" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Backed by an <span className="text-primary-600">Educational Giant</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl font-medium max-w-3xl mx-auto mt-6 leading-relaxed">
              When you choose BE MAX KIDS & PUBLIC SCHOOL, you aren't just choosing a school; you are stepping into a legacy of unparalleled excellence. As a proud initiative of the Bemax Group of Institutions, we bring world-class, premium education to your child at a highly affordable fee.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "12+ Years", subtitle: "of Excellence", desc: "Unchallenged leadership in the education sector.", icon: FiAward },
              { title: "1 Lakh+", subtitle: "Global Winners", desc: "Successfully molded over 100,000 professionals worldwide.", icon: FiUsers },
              { title: "Elite", subtitle: "Partnerships", desc: "Proud partners of IDP IELTS, British Council, and Pearson (PTE).", icon: FiGlobe },
              { title: "Premium", subtitle: "Education", desc: "AI classrooms and international language training without financial stress.", icon: FaBookReader }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-primary-50 p-8 rounded-[2rem] border border-primary-100/50 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 mx-auto bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  <stat.icon size={30} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-1">{stat.title}</h3>
                <h4 className="text-lg font-bold text-accent mb-3">{stat.subtitle}</h4>
                <p className="text-slate-600 font-medium leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT US SECTION (EXISTING/MODIFIED) */}
      <section id="about" className="py-32 bg-slate-50 relative overflow-hidden">
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
                <p className="text-xl font-bold text-white leading-snug">Empowering minds with legacy.</p>
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
                Established with a vision to create a conducive environment for holistic learning, BE MAX KIDS & PUBLIC SCHOOL focuses on nurturing self-reliant, confident, and responsible global citizens.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                We blend traditional moral values with a progressive, modern curriculum. Our educators are dedicated to finding and polishing the unique potential hidden within every child, ensuring they are fully equipped for the challenges of tomorrow.
              </p>
              <div className="pt-4 flex gap-8">
                 <div>
                    <h4 className="text-4xl font-black text-accent drop-shadow-sm mb-1">1L+</h4>
                    <span className="font-semibold text-slate-500 uppercase tracking-widest text-sm">Alumni</span>
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

      {/* 4. THE 4 PILLARS OF EXCELLENCE (NEW) */}
      <section id="pillars" className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 md:mb-32"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              The BEMAX Vision:<br/> <span className="text-primary-600 mt-2 block">Shaping the Future, Protecting Childhood</span>
            </h2>
            <p className="text-slate-600 text-xl font-medium max-w-2xl mx-auto mt-6">
              Our curriculum is designed to solve the biggest worries of modern parenting: heavy homework, screen addiction, and safety.
            </p>
          </motion.div>

          <div className="space-y-24 md:space-y-32">
             {/* Pillar 1 */}
             <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 className="lg:w-1/2 relative w-full"
               >
                  <div className="aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative w-full">
                     <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" alt="Stress Free Learning" className="object-cover w-full h-full" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                        <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/30 text-white font-bold text-lg shadow-xl">
                           AI-Powered Smart Campus
                        </div>
                     </div>
                  </div>
               </motion.div>
               <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 className="lg:w-1/2 space-y-6"
               >
                 <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-2 shadow-sm">
                   <FaBrain size={30} />
                 </div>
                 <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">1. Stress-Free Academic Excellence</h2>
                 <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
                   We replace rote memorization with hands-on, activity-based CBSE learning in an AI-powered smart campus.
                 </p>
                 <ul className="space-y-4 pt-2">
                   {[
                     <><strong className="text-slate-900">Flawless Foundation:</strong> Expert Jolly Phonics training from LKG all the way to Class 5.</>,
                     <><strong className="text-slate-900">No Burnout:</strong> A strict "Less Homework, More Productivity" policy so kids can enjoy their evenings.</>,
                     <><strong className="text-slate-900">Tech-Driven:</strong> STEM Robotics, AI Smart Classrooms, and an International Library.</>
                   ].map((item, i) => (
                     <li key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-colors hover:border-blue-200">
                       <FiCheckCircle className="text-blue-500 shrink-0 mt-1" size={24} />
                       <span className="text-slate-700 text-lg">{item}</span>
                     </li>
                   ))}
                 </ul>
               </motion.div>
             </div>

             {/* Pillar 2 */}
             <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
               <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 className="lg:w-1/2 relative w-full"
               >
                  <div className="aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative w-full">
                     <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" alt="Multi-Language Fluency" className="object-cover w-full h-full" />
                  </div>
               </motion.div>
               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 className="lg:w-1/2 space-y-6"
               >
                 <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-2 shadow-sm">
                   <FiGlobe size={30} />
                 </div>
                 <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">2. Global Multi-Language Fluency</h2>
                 <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
                   <strong className="text-emerald-700 bg-emerald-100 px-2 py-1 rounded inline-block mb-2 text-sm uppercase tracking-wider">Our Biggest USP</strong><br/>
                   We don't just teach the syllabus; we create highly confident polyglots.
                 </p>
                 <ul className="space-y-4 pt-2">
                   {[
                     <><strong className="text-slate-900">Driven by Experts:</strong> Fluency programs spearheaded by in-house IELTS trainers.</>,
                     <><strong className="text-slate-900">Start Early:</strong> Custom English Garden KG books published exclusively by Bemax.</>,
                     <><strong className="text-slate-900">Conquer Stage Fright:</strong> Daily 30-minute speaking sessions and a student-run School FM Radio.</>,
                     <><strong className="text-slate-900">Beyond English:</strong> Free professional German (A1-B2), Hindi, and optional Arabic training.</>
                   ].map((item, i) => (
                     <li key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-colors hover:border-emerald-200">
                       <FiCheckCircle className="text-emerald-500 shrink-0 mt-1" size={24} />
                       <span className="text-slate-700 text-lg">{item}</span>
                     </li>
                   ))}
                 </ul>
               </motion.div>
             </div>

             {/* Pillar 3 */}
             <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 className="lg:w-1/2 relative w-full"
               >
                  <div className="aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative w-full">
                     <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop" alt="Physical Development" className="object-cover w-full h-full" />
                  </div>
               </motion.div>
               <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 className="lg:w-1/2 space-y-6"
               >
                 <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-2 shadow-sm">
                   <FaRunning size={30} />
                 </div>
                 <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">3. Holistic Skill & Physical Development</h2>
                 <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
                   We actively replace digital screen time with real-world action, building physically tough and mentally sharp leaders.
                 </p>
                 <ul className="space-y-4 pt-2">
                   {[
                     <><strong className="text-slate-900">Free In-House Training:</strong> Yoga, Abacus, Music, Dance, and Arts built into the curriculum.</>,
                     <><strong className="text-slate-900">Premium Sports:</strong> Expert-led Karate, Swimming, Skating, and elite Horse Riding.</>,
                     <><strong className="text-slate-900">100% Participation:</strong> A strict 'No Partiality' policy where every single child performs on stage.</>
                   ].map((item, i) => (
                     <li key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-colors hover:border-orange-200">
                       <FiCheckCircle className="text-orange-500 shrink-0 mt-1" size={24} />
                       <span className="text-slate-700 text-lg">{item}</span>
                     </li>
                   ))}
                 </ul>
               </motion.div>
             </div>

             {/* Pillar 4 */}
             <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
               <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 className="lg:w-1/2 relative w-full"
               >
                  <div className="aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative w-full">
                     <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop" alt="Total Safety" className="object-cover w-full h-full" />
                  </div>
               </motion.div>
               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 className="lg:w-1/2 space-y-6"
               >
                 <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-2 shadow-sm">
                   <FiShield size={30} />
                 </div>
                 <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">4. Character, Discipline & Total Safety</h2>
                 <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
                   Academic brilliance means nothing without a strong moral compass.
                 </p>
                 <ul className="space-y-4 pt-2">
                   {[
                     <><strong className="text-slate-900">A Home Away From Home:</strong> Our teachers and caretakers act as your child's extended family.</>,
                     <><strong className="text-slate-900">Unmatched Protection:</strong> Dedicated School Psychologist, strict anti-abuse awareness, and profound family value education.</>,
                     <><strong className="text-slate-900">Stress-Free Commute:</strong> Safe, highly secure school buses covering a 25-km radius, with caretakers on every single bus to ensure doorstep-to-school safety.</>
                   ].map((item, i) => (
                     <li key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-colors hover:border-rose-200">
                       <FiCheckCircle className="text-rose-500 shrink-0 mt-1" size={24} />
                       <span className="text-slate-700 text-lg">{item}</span>
                     </li>
                   ))}
                 </ul>
                 
                 <div className="pt-8">
                   <button className="bg-primary-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-primary-600/30 hover:-translate-y-1 hover:bg-primary-700 transition-all flex items-center gap-2">
                     Explore Our Curriculum in Detail <FiArrowRight size={20} />
                   </button>
                 </div>
               </motion.div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US / FACILITIES (EXISTING) */}
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

      {/* 6. ACADEMICS SECTION (EXISTING) */}
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
              A comprehensive educational journey from early childhood to young adulthood, designed to maximize student potential under the BE MAX syllabus.
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
                <div className="w-16 h-16 bg-accent text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-accent/50">
                   <FiBookOpen size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Kindergarten</h3>
                <p className="text-primary-100 text-lg">Focuses on sensory development, play-based learning, and foundational social skills exclusively with custom English Garden books.</p>
             </motion.div>

             {/* Program 2 */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-[2rem] hover:bg-white/20 transition-all"
             >
                <div className="w-16 h-16 bg-blue-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50">
                   <FiUsers size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Primary & Middle</h3>
                <p className="text-primary-100 text-lg">Building strong academic fundamentals while encouraging curiosity, stress-free learning, and hands-on activities.</p>
             </motion.div>

             {/* Program 3 */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-[2rem] hover:bg-white/20 transition-all"
             >
                <div className="w-16 h-16 bg-emerald-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/50">
                   <FiGlobe size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Secondary School</h3>
                <p className="text-primary-100 text-lg">Rigorous preparation for university, focusing on leadership, specialized subjects, and global language readiness.</p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 7. THE BEMAX DIFFERENCE (NEW) */}
      <section id="difference" className="py-32 bg-primary-50/50 relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6">
              Why Parents Love <span className="text-accent relative inline-block mt-2">BEMAX<svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 5.5C52.5 -1.5 148.5 -1.5 197.5 5.5" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round"/></svg></span>
            </h2>
            <p className="text-slate-600 text-xl font-medium max-w-2xl mx-auto">
              We proactively solve the biggest challenges in modern parenting and education.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                quote: "I worry about my child's English.",
                solution: "With daily AI-generated podcast homework, ELSAP training, and IELTS experts, your child will speak with international fluency and zero hesitation.",
                icon: FiGlobe,
                color: "text-blue-600"
              },
              {
                quote: "I hate the morning transportation rush.",
                solution: "Our massive 25-km transport radius with dedicated on-board caretakers gives you complete morning peace of mind.",
                icon: FaRobot,
                color: "text-emerald-600"
              },
              {
                quote: "My child is stressed by endless homework.",
                solution: "Our activity-oriented classrooms teach concepts deeply during school hours, leaving home time for family and play.",
                icon: FaBrain,
                color: "text-orange-600"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 relative group"
              >
                 <div className="absolute top-0 right-10 -translate-y-1/2 w-14 h-14 bg-white border border-slate-100 text-accent rounded-full flex items-center justify-center shadow-lg group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <item.icon size={24} />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-800 mb-6 italic border-l-4 border-accent pl-4 pr-4 leading-snug">
                   "{item.quote}"
                 </h3>
                 <p className="text-lg text-slate-600 font-medium leading-relaxed">
                   <strong className={item.color}>We fix that.</strong> {item.solution}
                 </p>
              </motion.div>
            ))}
          </div>
         </div>
      </section>

      {/* 8. CONTACT SECTION (EXISTING) */}
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
              Have questions about admissions or want to schedule a campus tour? We're here to help.
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
                <div className="flex items-start gap-6 group">
                   <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex justify-center items-center shrink-0 shadow-sm border border-primary-100 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                      <FiMapPin size={26} />
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-2">Campus Location</h4>
                      <p className="text-slate-600 text-lg">123 Education Boulevard,<br/>Knowledge City, Kerala, 12345</p>
                   </div>
                </div>

                <div className="flex items-start gap-6 group">
                   <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex justify-center items-center shrink-0 shadow-sm border border-primary-100 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                      <FiPhone size={26} />
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-2">Phone</h4>
                      <p className="text-slate-600 text-lg">+91 98765 43210<br/>+91 98765 43211</p>
                   </div>
                </div>

                <div className="flex items-start gap-6 group">
                   <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex justify-center items-center shrink-0 shadow-sm border border-primary-100 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                      <FiMail size={26} />
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-2">Email</h4>
                      <p className="text-slate-600 text-lg">admissions@bemax.edu<br/>info@bemax.edu</p>
                   </div>
                </div>
             </motion.div>

             {/* Form */}
             <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-[#f8fafc] p-10 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-2xl relative overflow-hidden"
             >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60"></div>
                
                <form className="space-y-6 relative z-10">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">First Name</label>
                        <input type="text" className="w-full px-5 py-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Last Name</label>
                        <input type="text" className="w-full px-5 py-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="Doe" />
                      </div>
                   </div>
                   
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Email Address</label>
                      <input type="email" className="w-full px-5 py-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="john@example.com" />
                   </div>

                   <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Message</label>
                      <textarea rows="4" className="w-full px-5 py-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none" placeholder="I would like to enquire about..."></textarea>
                   </div>

                   <button type="button" className="w-full bg-primary-600 text-white font-bold text-lg py-5 rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30 flex items-center justify-center gap-2 mt-4">
                     Submit Enquiry <FiArrowRight size={20} />
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
