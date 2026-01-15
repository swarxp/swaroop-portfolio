import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaFileAlt } from 'react-icons/fa';

const Education = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="education" className="section-container">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                    <span className="gradient-text">Education & Achievements</span>
                </h2>
                <p className="text-gray-400 text-center mb-12 text-lg">
                    Academic background and research contributions
                </p>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Education Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="glass rounded-2xl p-8 border-l-4 border-primary hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
                    >
                        <div className="flex items-start gap-4 mb-4">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <FaGraduationCap className="text-3xl text-primary" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold mb-2">Bachelor of Engineering</h3>
                                <p className="text-primary font-medium mb-1">Electronics and Computer Science</p>
                                <p className="text-gray-400 text-sm mb-3">Vellore Institute of Technology (VIT)</p>
                                <div className="inline-block px-4 py-2 bg-accent/10 rounded-lg border border-accent/30">
                                    <p className="text-accent font-bold text-lg">CGPA: 8.05</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Research Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="glass rounded-2xl p-8 border-l-4 border-accent hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300"
                    >
                        <div className="flex items-start gap-4 mb-4">
                            <div className="p-3 bg-accent/10 rounded-lg">
                                <FaFileAlt className="text-3xl text-accent" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold mb-2">Research Publication</h3>
                                <p className="text-accent font-medium mb-3">Semiconductor Wafer Defect Identification</p>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Contributed to research on advanced defect detection methodologies in semiconductor manufacturing,
                                    bridging electronics and computer science domains.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Education;
