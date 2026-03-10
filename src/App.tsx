import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Palette, 
  Cpu, 
  Rocket,
  ChevronRight,
  Menu,
  X,
  Sparkles
} from 'lucide-react';

const projects = [
  {
    title: "Event Management System",
    category: "Web App",
    description: "A comprehensive platform for organizing, managing, and tracking events with real-time updates.",
    image: "https://picsum.photos/seed/event-mgmt/800/1000",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/mohdrishab/event-management-system"
  },
  {
    title: "IoT Projects Collection",
    category: "IoT",
    description: "A diverse collection of Internet of Things projects exploring various sensors and connectivity.",
    image: "https://picsum.photos/seed/iot-collection/800/1000",
    tags: ["Arduino", "C++", "Sensors", "MQTT"],
    github: "https://github.com/mohdrishab/IoT-Projects"
  },
  {
    title: "ESP32 IoT Systems",
    category: "IoT",
    description: "Advanced IoT implementations specifically designed for the ESP32 microcontroller ecosystem.",
    image: "https://picsum.photos/seed/esp32/800/1000",
    tags: ["ESP32", "MicroPython", "WiFi", "HTTP"],
    github: "https://github.com/mohdrishab/IoT-Projects/tree/main/esp32"
  },
  {
    title: "Object Detection System",
    category: "AI",
    description: "Real-time object detection system leveraging computer vision for automated identification.",
    image: "https://picsum.photos/seed/obj-detect/800/1000",
    tags: ["Python", "OpenCV", "TensorFlow", "YOLO"],
    github: "https://github.com/mohdrishab/IoT-Projects/tree/main/object%20detection"
  }
];

const skills = [
  { name: "Automation", icon: <Rocket className="w-5 h-5" />, items: ["N8N", "Workflow Design", "API Integration", "Automation"] },
  { name: "IoT", icon: <Cpu className="w-5 h-5" />, items: ["Arduino", "ESP32", "Sensors", "MQTT"] },
  { name: "Web", icon: <Palette className="w-5 h-5" />, items: ["React", "HTML", "CSS", "JS", "WordPress", "Shopify"] },
  { name: "Development", icon: <Code2 className="w-5 h-5" />, items: ["Python", "System Design", "Logic Building"] }
];

const techStack = [
  "Python", "React", "HTML", "CSS", "JS", "Automation", "Shopify", "WordPress", "N8N", "IoT"
];

const experience = [
  {
    year: "2023 - Present",
    role: "Web Developer",
    company: "Learning Phase",
    description: "Just a web dev beginner."
  },
  {
    year: "2021 - 2023",
    role: "Beginner",
    company: "Personal Lab",
    description: "As I started doing something."
  },
  {
    year: "2019 - 2021",
    role: "Noob",
    company: "YouTube Academy",
    description: "Just watching videos and doing nothing."
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen selection:bg-purple-500 selection:text-white">
      {/* Background Blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-300/30 blur-[120px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-300/30 blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[45%] h-[45%] rounded-full bg-orange-300/20 blur-[120px] animate-blob animation-delay-4000" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-display font-bold tracking-tighter"
          >
            MOHAMMED RISHAB.
          </motion.div>

          <div className="hidden md:flex items-center space-x-12">
            {['About', 'Projects', 'Stack', 'Contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-medium uppercase tracking-widest hover:text-purple-600 transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-32 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-8">
              {['About', 'Projects', 'Stack', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-display font-bold tracking-tighter"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative w-full h-full"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full blur-[2px]" />
              <div className="absolute bottom-1/4 right-0 w-2 h-2 bg-blue-500 rounded-full blur-[1px]" />
              <div className="absolute top-1/4 left-0 w-3 h-3 bg-orange-500 rounded-full blur-[1px]" />
              <Sparkles className="absolute top-1/2 right-1/4 w-6 h-6 text-purple-400 opacity-50" />
            </motion.div>
            <div className="absolute inset-0 rounded-full border border-black/5" />
            <div className="absolute inset-[15%] rounded-full border border-black/5" />
          </div>

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 flex items-center justify-center space-x-2"
            >
              <span className="px-3 py-1 bg-white/50 backdrop-blur-sm border border-black/5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">
                Available for projects
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[15vw] md:text-[12vw] font-display font-bold leading-[0.85] tracking-tighter uppercase mb-8"
            >
              Portfolio
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm font-medium uppercase tracking-widest text-black/60"
            >
              <span>Automation Expert</span>
              <span className="hidden md:block w-1 h-1 bg-black/20 rounded-full" />
              <span>Developer</span>
              <span className="hidden md:block w-1 h-1 bg-black/20 rounded-full" />
              <span>IoT Enthusiast</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <a href="#projects" className="group relative px-10 py-4 bg-ink text-white rounded-full overflow-hidden transition-transform active:scale-95">
                <span className="relative z-10 font-bold uppercase text-xs tracking-widest">View Projects</span>
                <div className="absolute inset-0 bg-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a href="#contact" className="px-10 py-4 border border-ink/10 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-ink hover:text-white transition-all active:scale-95">
                Contact Me
              </a>
            </motion.div>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <div className="w-px h-12 bg-gradient-to-b from-ink/20 to-transparent" />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-5 sticky top-32"
              >
                <div className="relative group">
                  <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden">
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      src="https://picsum.photos/seed/profile/800/1000" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute -bottom-6 -right-6 w-40 h-40 bg-white p-6 rounded-3xl shadow-2xl border border-black/5 flex flex-col justify-center items-center text-center"
                  >
                    <div className="text-5xl font-display font-bold text-purple-600">5+</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-black/40 mt-2">Years of Experience</div>
                  </motion.div>
                </div>
              </motion.div>

              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-purple-600 mb-8 inline-block border-b-2 border-purple-600/20 pb-2">About Me</h2>
                  <h3 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-[0.9] mb-10">
                    Building <span className="text-purple-600">Smart</span> Systems for a Better World
                  </h3>
                  <p className="text-xl text-black/60 leading-relaxed mb-16 max-w-2xl font-medium">
                    I'm a multidisciplinary developer and automation expert focused on building high-performance systems that solve real-world problems. With a background in IoT and a passion for workflow optimization, I bring a unique perspective to every project.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, duration: 0.6 }}
                      whileHover={{ y: -10 }}
                      className="p-8 bg-white border border-black/5 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-500 group"
                    >
                      <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-500">
                        {skill.icon}
                      </div>
                      <h4 className="text-xl font-bold mb-4">{skill.name}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map(item => (
                          <span key={item} className="px-3 py-1 bg-black/5 rounded-full text-[10px] font-bold uppercase tracking-wider text-black/60 group-hover:bg-purple-50 group-hover:text-purple-600 transition-colors duration-500">
                            {item}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-purple-600 mb-6">Portfolio</h2>
                <h3 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9]">
                  Featured<br />Work
                </h3>
              </div>
              <p className="text-black/50 max-w-xs text-right hidden md:block">
                A selection of projects that showcase my expertise in Automation, IoT, and modern web development.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {projects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="group relative bg-white rounded-[2.5rem] p-4 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(139,92,246,0.15)]"
                >
                  <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6">
                    <motion.img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 glass rounded-full text-[10px] font-bold uppercase tracking-widest">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="px-2 pb-4">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-2xl font-display font-bold tracking-tight group-hover:text-purple-600 transition-colors">
                        {project.title}
                      </h4>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-black text-white hover:bg-purple-600 transition-colors shadow-lg"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                    
                    <p className="text-black/60 text-sm mb-6 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg bg-purple-50 text-purple-600 border border-purple-100/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section id="stack" className="py-32 relative overflow-hidden bg-black text-white">
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:40px_40px]" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />

          <div className="relative z-10">
            <div className="max-w-7xl mx-auto text-center mb-24 px-6">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sm font-bold uppercase tracking-[0.5em] text-purple-400 mb-6"
              >
                Tech Stack
              </motion.h2>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-display font-bold tracking-tighter"
              >
                Tools of the Trade
              </motion.h3>
            </div>

            {/* Marquee Rows */}
            <div className="space-y-8">
              {/* Row 1: Left Moving */}
              <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <motion.div
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="flex flex-none gap-8 pr-8"
                >
                  {[...techStack, ...techStack].map((tech, i) => (
                    <div
                      key={i}
                      className="px-12 py-8 bg-white/5 border border-white/10 rounded-[2rem] flex items-center space-x-6 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 group min-w-[280px]"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-purple-600/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-500">
                        <Code2 className="w-6 h-6" />
                      </div>
                      <span className="text-xl font-display font-bold uppercase tracking-widest whitespace-nowrap">{tech}</span>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Row 2: Right Moving */}
              <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <motion.div
                  animate={{ x: ["-50%", "0%"] }}
                  transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                  className="flex flex-none gap-8 pr-8"
                >
                  {[...techStack.slice().reverse(), ...techStack.slice().reverse()].map((tech, i) => (
                    <div
                      key={i}
                      className="px-12 py-8 bg-white/5 border border-white/10 rounded-[2rem] flex items-center space-x-6 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 group min-w-[280px]"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-purple-600/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-500">
                        <Code2 className="w-6 h-6" />
                      </div>
                      <span className="text-xl font-display font-bold uppercase tracking-widest whitespace-nowrap">{tech}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-purple-600 mb-6">Experience</h2>
              <h3 className="text-5xl font-display font-bold tracking-tighter leading-tight">
                The Journey<br />So Far
              </h3>
            </div>
            <div className="lg:col-span-8 space-y-12">
              {experience.map((item, i) => (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-black/5"
                >
                  <div className="md:col-span-3 text-sm font-bold uppercase tracking-widest text-black/40 pt-1">
                    {item.year}
                  </div>
                  <div className="md:col-span-9">
                    <h4 className="text-2xl font-display font-bold mb-2 group-hover:text-purple-600 transition-colors">{item.role}</h4>
                    <div className="text-sm font-bold uppercase tracking-widest text-black/60 mb-4">{item.company}</div>
                    <p className="text-black/50 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="glass rounded-[3rem] p-12 md:p-24 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 blur-[100px] -z-10" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 blur-[100px] -z-10" />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div>
                  <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-purple-600 mb-6">Get in touch</h2>
                  <h3 className="text-6xl md:text-7xl font-display font-bold tracking-tighter leading-none mb-8">
                    Let's build<br />something<br /><span className="text-purple-600">extraordinary</span>.
                  </h3>
                  <div className="space-y-6">
                    <a href="mailto:mohammedrishab222@gmail.com" className="flex items-center space-x-4 group">
                      <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span className="text-xl font-medium">mohammedrishab222@gmail.com</span>
                    </a>
                    <div className="flex space-x-4 pt-8">
                      {[
                        { Icon: Github, href: "https://github.com/mohdrishab" },
                        { Icon: Linkedin, href: "https://in.linkedin.com/in/mohammad-rishab-67b42b383" }
                      ].map(({ Icon, href }, i) => (
                        <a 
                          key={i} 
                          href={href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-14 h-14 rounded-full border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all"
                        >
                          <Icon className="w-6 h-6" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-black/40 ml-4">Name</label>
                      <input type="text" className="w-full bg-white/50 border border-black/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-500 transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-black/40 ml-4">Email</label>
                      <input type="email" className="w-full bg-white/50 border border-black/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-500 transition-colors" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-black/40 ml-4">Message</label>
                    <textarea rows={4} className="w-full bg-white/50 border border-black/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-500 transition-colors resize-none" placeholder="Tell me about your project..." />
                  </div>
                  <button className="w-full py-6 bg-ink text-white rounded-2xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-purple-600 transition-colors active:scale-[0.98]">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-black/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-display font-bold tracking-tighter">MOHAMMED RISHAB.</div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-black/40">
            © 2026 Mohammed Rishab. All rights reserved.
          </div>
          <div className="flex space-x-8">
            {['Privacy', 'Terms', 'Cookies'].map(item => (
              <a key={item} href="#" className="text-[10px] font-bold uppercase tracking-widest text-black/40 hover:text-purple-600 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
