import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaMicrochip, FaServer, FaFilm } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiVite, SiCplusplus, SiTmdb } from 'react-icons/si';

const PROJECTS = [
  {
    id: 1,
    title: 'BookHub',
    subtitle: 'Library Management System',
    description: 'Full-stack MERN application with complete CRUD functionality. Features RESTful API architecture, JWT authentication, and a clean responsive UI for seamless book management.',
    tech: [
      { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
      { icon: SiExpress, name: 'Express.js', color: '#fff' },
      { icon: SiReact, name: 'React.js', color: '#61DAFB' },
      { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
    ],
    github: 'https://github.com/swarxp/bookhub-lms',
    icon: FaServer,
    gradient: 'from-emerald-500 to-cyan-600',
    accent: '#10B981',
    tags: ['MERN', 'REST API', 'CRUD', 'JWT'],
  },
  {
    id: 2,
    title: 'Movie Explorer',
    subtitle: 'Cinematic Discovery App',
    description: 'High-performance movie discovery app powered by TMDb API. Built with Vite for lightning-fast builds, featuring real-time search, filtering, and a beautiful card-based UI.',
    tech: [
      { icon: SiReact, name: 'React.js', color: '#61DAFB' },
      { icon: SiVite, name: 'Vite', color: '#BD34FE' },
      { icon: SiTmdb, name: 'TMDb API', color: '#01B4E4' },
    ],
    github: 'https://github.com/swarxp/ReactProject-MovieApp',
    icon: FaFilm,
    gradient: 'from-blue-500 to-violet-600',
    accent: '#0EA5E9',
    tags: ['Vite', 'TMDb API', 'React Hooks', 'Responsive'],
  },
  {
    id: 3,
    title: 'Fire-Fighter Bot',
    subtitle: 'Autonomous Embedded System',
    description: 'Hardware-software integrated autonomous robot using STM32 microcontroller. Features flame detection sensors, PWM-controlled DC motors, and real-time C++ logic for fire suppression.',
    tech: [
      { icon: SiCplusplus, name: 'C++', color: '#00599C' },
      { icon: FaMicrochip, name: 'STM32', color: '#03234B' },
    ],
    github: '#',
    icon: FaMicrochip,
    gradient: 'from-orange-500 to-red-600',
    accent: '#f59e0b',
    tags: ['STM32', 'C++', 'PWM', 'Embedded', 'Robotics'],
    hardware: true,
  },
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [shine, setShine] = useState({ x: 50, y: 50 });
  const [expanded, setExpanded] = useState(false);

  const onMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * 8, y: -dx * 8 });
    setShine({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const onMouseLeave = () => setTilt({ x: 0, y: 0 });

  const Icon = project.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        ref={cardRef}
        className="tilt-card glass rounded-2xl overflow-hidden relative cursor-none"
        style={{
          transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          '--mouse-x': `${shine.x}%`, '--mouse-y': `${shine.y}%`,
        }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <div className="card-shine" />

        {/* Top gradient bar */}
        <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

        <div className="p-7 tilt-card-inner">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl" style={{ background: `${project.accent}15`, border: `1px solid ${project.accent}30` }}>
                <Icon style={{ color: project.accent }} size={20} />
              </div>
              <div>
                <h3 className="font-orbitron font-bold text-lg leading-tight">{project.title}</h3>
                <p className="text-xs font-mono" style={{ color: project.accent }}>{project.subtitle}</p>
              </div>
            </div>
            {project.hardware && (
              <span className="badge text-orange-400 bg-orange-400/10 border border-orange-400/20">HARDWARE</span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>

          {/* Tech icons */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map(({ icon: TechIcon, name, color }) => (
              <span key={name}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono"
                style={{ background: `${color}10`, color, border: `1px solid ${color}25` }}>
                <TechIcon size={11} />
                {name}
              </span>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map(t => (
              <span key={t} className="text-xs font-mono text-gray-600 bg-gray-800/50 px-2 py-0.5 rounded">#{t}</span>
            ))}
          </div>

          {/* Action */}
          <a
            href={project.github}
            target={project.github !== '#' ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="magnetic-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
            style={{ background: `${project.accent}15`, color: project.accent, border: `1px solid ${project.accent}30` }}
          >
            <FaGithub size={15} />
            View Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="projects" className="section-container">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          <div className="section-tag justify-center">Featured Projects</div>
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 font-orbitron">
            <span className="gradient-text">What I've Built</span>
          </h2>
          <p className="text-center text-gray-500 font-mono text-sm mb-12">
            Hover the cards — they respond to your mouse
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
