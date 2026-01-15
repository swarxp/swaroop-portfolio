import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="contact" className="section-container">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto text-center"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="gradient-text">Let's Connect</span>
                </h2>
                <p className="text-gray-400 mb-12 text-lg">
                    Feel free to reach out for collaborations, opportunities, or just a friendly chat
                </p>

                {/* Email CTA */}
                <motion.a
                    href="mailto:waradeswaroop@gmail.com"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-lg text-white font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/30 mb-12"
                >
                    <FaEnvelope className="text-2xl" />
                    <span>waradeswaroop@gmail.com</span>
                </motion.a>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex items-center justify-center gap-6"
                >
                    <a
                        href="https://github.com/swarxp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 glass rounded-full hover:bg-primary/10 hover:scale-110 transition-all duration-300 group"
                        aria-label="GitHub"
                    >
                        <FaGithub className="text-3xl group-hover:text-primary transition-colors" />
                    </a>

                    <a
                        href="https://linkedin.com/in/swaroopwarade"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 glass rounded-full hover:bg-primary/10 hover:scale-110 transition-all duration-300 group"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className="text-3xl group-hover:text-primary transition-colors" />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Contact;
