import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = {
    languages: ['C/C++', 'Python', 'Java', 'JavaScript', 'SQL'],
    frameworks: ['React.js', 'Node.js', 'Express.js'],
    tools: ['AWS', 'Linux', 'Git', 'Bootstrap']
};

const SkillTag = ({ skill, index, category }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const colors = {
        languages: 'border-primary/50 hover:border-primary hover:bg-primary/10 hover:shadow-primary/50',
        frameworks: 'border-accent/50 hover:border-accent hover:bg-accent/10 hover:shadow-accent/50',
        tools: 'border-blue-400/50 hover:border-blue-400 hover:bg-blue-400/10 hover:shadow-blue-400/50'
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`px-6 py-3 glass rounded-lg border-2 ${colors[category]} transition-all duration-300 hover:scale-110 cursor-default`}
        >
            <span className="font-medium text-lg">{skill}</span>
        </motion.div>
    );
};

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="skills" className="section-container">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                    <span className="gradient-text">Skills & Technologies</span>
                </h2>
                <p className="text-gray-400 text-center mb-12 text-lg">
                    My technical toolkit spanning software and hardware
                </p>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Languages */}
                    <div className="glass rounded-2xl p-8 border-l-4 border-primary">
                        <h3 className="text-2xl font-bold mb-6 text-primary">Languages</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.languages.map((skill, index) => (
                                <SkillTag key={skill} skill={skill} index={index} category="languages" />
                            ))}
                        </div>
                    </div>

                    {/* Frameworks */}
                    <div className="glass rounded-2xl p-8 border-l-4 border-accent">
                        <h3 className="text-2xl font-bold mb-6 text-accent">Frameworks</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.frameworks.map((skill, index) => (
                                <SkillTag key={skill} skill={skill} index={index} category="frameworks" />
                            ))}
                        </div>
                    </div>

                    {/* Tools */}
                    <div className="glass rounded-2xl p-8 border-l-4 border-blue-400">
                        <h3 className="text-2xl font-bold mb-6 text-blue-400">Tools & Platforms</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.tools.map((skill, index) => (
                                <SkillTag key={skill} skill={skill} index={index} category="tools" />
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
