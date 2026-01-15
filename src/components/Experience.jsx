import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const highlights = [
        'Built a responsive frontend portal using Bootstrap for enhanced user experience',
        'Mitigated a spam crisis by identifying and blocking 850+ fraudulent registrations',
        'Integrated Google reCAPTCHA to enhance platform security and prevent bot attacks'
    ];

    return (
        <section id="experience" className="section-container">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                    <span className="gradient-text">Experience</span>
                </h2>
                <p className="text-gray-400 text-center mb-12 text-lg">
                    Professional journey and contributions
                </p>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />

                        {/* Experience Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative pl-20 pb-12"
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-primary border-4 border-dark-300 shadow-lg shadow-primary/50" />

                            {/* Card */}
                            <div className="glass rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-3 bg-primary/10 rounded-lg">
                                        <FaBriefcase className="text-2xl text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold mb-1">Software Engineering Intern</h3>
                                        <p className="text-primary font-medium mb-2">ITJobxs Pvt. Ltd.</p>
                                        <p className="text-gray-500 text-sm">2024</p>
                                    </div>
                                </div>

                                <div className="space-y-3 mt-6">
                                    {highlights.map((highlight, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                                            <p className="text-gray-300 leading-relaxed">{highlight}</p>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Tech tags */}
                                <div className="flex flex-wrap gap-2 mt-6">
                                    {['Bootstrap', 'Google reCAPTCHA', 'Frontend Development', 'Security'].map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-sm bg-dark-200 rounded-full text-gray-400 border border-gray-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
