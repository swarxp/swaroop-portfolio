import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaAws } from 'react-icons/fa';
import CircuitIcon from './icons/CircuitIcon';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Animated background circuit icons */}
            <div className="absolute inset-0 overflow-hidden opacity-5">
                <CircuitIcon className="absolute top-20 left-10 w-32 h-32 text-primary animate-float" />
                <CircuitIcon className="absolute bottom-20 right-10 w-40 h-40 text-accent" style={{ animationDelay: '1s' }} />
                <CircuitIcon className="absolute top-1/2 left-1/4 w-24 h-24 text-primary" style={{ animationDelay: '2s' }} />
            </div>

            <div className="section-container text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Name */}
                    <motion.h1
                        className="text-6xl md:text-8xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="gradient-text">Swaroop Warade</span>
                    </motion.h1>

                    {/* Headline */}
                    <motion.p
                        className="text-xl md:text-2xl text-gray-400 mb-4 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        B.E. Student in Electronics and Computer Science at VIT
                    </motion.p>

                    <motion.p
                        className="text-lg md:text-xl text-gray-500 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        Building innovative solutions at the intersection of hardware and software
                    </motion.p>

                    {/* Social Links */}
                    <motion.div
                        className="flex items-center justify-center gap-6 flex-wrap"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <a
                            href="https://github.com/swarxp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 glass rounded-lg hover:bg-primary/10 transition-all duration-300 group"
                        >
                            <FaGithub className="text-2xl group-hover:scale-110 transition-transform" />
                            <span className="font-medium">GitHub</span>
                        </a>

                        <a
                            href="https://linkedin.com/in/swaroopwarade"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 glass rounded-lg hover:bg-primary/10 transition-all duration-300 group"
                        >
                            <FaLinkedin className="text-2xl group-hover:scale-110 transition-transform" />
                            <span className="font-medium">LinkedIn</span>
                        </a>

                        <a
                            href="https://www.credly.com/badges/your-aws-badge"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 glass rounded-lg hover:bg-accent/10 transition-all duration-300 group border-accent/30"
                        >
                            <FaAws className="text-2xl text-accent group-hover:scale-110 transition-transform" />
                            <span className="font-medium">AWS Certified</span>
                        </a>
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        className="mt-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <div className="w-6 h-10 border-2 border-gray-600 rounded-full mx-auto relative">
                            <motion.div
                                className="w-1.5 h-1.5 bg-primary rounded-full absolute left-1/2 -translate-x-1/2 top-2"
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
