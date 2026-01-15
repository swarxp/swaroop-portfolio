import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiVite, SiCplusplus } from 'react-icons/si';

const projects = [
    {
        title: 'Bookhub',
        description: 'A full-stack library management system built with the MERN stack, featuring complete CRUD functionality and RESTful API architecture for seamless book management.',
        tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
        icons: [SiMongodb, SiExpress, SiReact, SiNodedotjs],
        github: 'https://github.com/swarxp/bookhub-lms',
        gradient: 'from-green-500 to-emerald-600'
    },
    {
        title: 'Movie Explorer',
        description: 'A high-performance movie discovery application leveraging TMDb API integration, built with Vite for optimal loading speeds and smooth user experience.',
        tech: ['React.js', 'Vite', 'TMDb API', 'JavaScript'],
        icons: [SiReact, SiVite],
        github: 'https://github.com/swarxp/ReactProject-MovieApp',
        gradient: 'from-blue-500 to-cyan-600'
    },
    {
        title: 'Fire Extinguisher Robot',
        description: 'An autonomous hardware-software integrated robot using STM32 microcontroller, C++ programming, and PWM logic for precise fire detection and extinguishing.',
        tech: ['STM32', 'C++', 'PWM', 'Embedded Systems'],
        icons: [SiCplusplus],
        github: '#',
        gradient: 'from-orange-500 to-red-600',
        isHardware: true
    }
];

const ProjectCard = ({ project, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="glass rounded-2xl p-8 card-hover group relative overflow-hidden"
        >
            {/* Gradient overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

            <div className="relative z-10">
                {/* Project icons */}
                <div className="flex gap-3 mb-4">
                    {project.icons.map((Icon, i) => (
                        <Icon key={i} className="text-3xl text-gray-400 group-hover:text-primary transition-colors" />
                    ))}
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-dark-200 rounded-full text-gray-400 border border-gray-700"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-dark-200 rounded-lg hover:bg-primary/20 border border-gray-700 hover:border-primary transition-all duration-300"
                    >
                        <FaGithub className="text-lg" />
                        <span className="text-sm font-medium">View Code</span>
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="projects" className="section-container">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                    <span className="gradient-text">Featured Projects</span>
                </h2>
                <p className="text-gray-400 text-center mb-12 text-lg">
                    Showcasing software and hardware innovations
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
