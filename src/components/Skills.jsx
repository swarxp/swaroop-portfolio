import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const SKILLS = {
  Languages: {
    color: '#0EA5E9',
    items: [
      { name: 'C/C++', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'JavaScript', level: 88 },
      { name: 'SQL', level: 75 },
    ],
  },
  Frameworks: {
    color: '#10B981',
    items: [
      { name: 'React.js', level: 88 },
      { name: 'Node.js', level: 82 },
      { name: 'Express.js', level: 80 },
    ],
  },
  Tools: {
    color: '#8B5CF6',
    items: [
      { name: 'AWS', level: 78 },
      { name: 'Linux', level: 80 },
      { name: 'Git', level: 85 },
      { name: 'Bootstrap', level: 82 },
    ],
  },
};

const SkillBar = ({ name, level, color, delay }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-between mb-1.5">
        <span className="font-mono text-sm text-gray-300 group-hover:text-white transition-colors">{name}</span>
        <span className="font-mono text-xs" style={{ color, opacity: hovered ? 1 : 0.6, transition: 'opacity 0.3s' }}>
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          className="h-full rounded-full relative"
          style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
        >
          {hovered && (
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
              style={{ background: `linear-gradient(90deg, transparent, ${color}60, transparent)` }}
            />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

const CategoryCard = ({ category, data, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={onMouseMove}
      className="relative glass rounded-2xl p-7 overflow-hidden"
      style={{ '--mouse-x': `${mousePos.x}%`, '--mouse-y': `${mousePos.y}%`, borderTop: `2px solid ${data.color}40` }}
    >
      <div className="card-shine" />
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-8 rounded-full" style={{ background: data.color }} />
        <h3 className="font-orbitron text-lg font-bold" style={{ color: data.color }}>{category}</h3>
        <span className="font-mono text-xs text-gray-600 ml-auto">{data.items.length} skills</span>
      </div>
      <div className="space-y-4">
        {data.items.map((skill, i) => (
          <SkillBar key={skill.name} {...skill} color={data.color} delay={index * 0.1 + i * 0.08} />
        ))}
      </div>
    </motion.div>
  );
};

// Floating marquee of all skills
const SkillMarquee = () => {
  const all = Object.values(SKILLS).flatMap(c => c.items.map(i => ({ ...i, color: c.color })));
  const doubled = [...all, ...all];
  return (
    <div className="overflow-hidden py-4" style={{ maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)' }}>
      <motion.div
        className="flex gap-3 w-max"
        animate={{ x: [0, -50 * all.length] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((s, i) => (
          <span
            key={i}
            className="skill-tag inline-flex items-center gap-1.5 glass px-4 py-2 rounded-full font-mono text-xs whitespace-nowrap"
            style={{ borderColor: `${s.color}30`, color: s.color }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: s.color }} />
            {s.name}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="skills" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
      >
        <div className="section-tag justify-center">Skills & Technologies</div>
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4 font-orbitron">
          <span className="gradient-text">My Arsenal</span>
        </h2>
        <p className="text-center text-gray-500 font-mono text-sm mb-12">
          From silicon wafers to React renders
        </p>

        {/* Marquee */}
        <div className="mb-12">
          <SkillMarquee />
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(SKILLS).map(([cat, data], i) => (
            <CategoryCard key={cat} category={cat} data={data} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
