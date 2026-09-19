import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBriefcase, FaShieldAlt, FaCode, FaRobot } from 'react-icons/fa';

const HIGHLIGHTS = [
  {
    icon: FaCode,
    text: 'Built a responsive frontend portal with Bootstrap that improved user onboarding flow',
    color: '#0EA5E9',
  },
  {
    icon: FaShieldAlt,
    text: 'Mitigated a spam crisis by identifying & blocking 850+ fraudulent registrations in 48 hours',
    color: '#ef4444',
  },
  {
    icon: FaRobot,
    text: 'Integrated Google reCAPTCHA v2 & v3 to harden platform security against automated attacks',
    color: '#10B981',
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="section-container">
      <div ref={ref}>
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}>
          <div className="section-tag justify-center">Work History</div>
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 font-orbitron">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-center text-gray-500 font-mono text-sm mb-14">
            Real-world impact through code
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px timeline-line" />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative pl-20 pb-10"
          >
            {/* Dot */}
            <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-blue-400 timeline-dot" />

            <div className="glass rounded-2xl p-7 relative overflow-hidden"
              style={{ borderTop: '2px solid rgba(14,165,233,0.3)' }}>

              {/* Glow behind card */}
              <div className="absolute top-0 left-0 w-48 h-48 rounded-full pointer-events-none opacity-10"
                style={{ background: 'radial-gradient(circle, #0EA5E9, transparent)', filter: 'blur(40px)' }} />

              <div className="flex items-start gap-4 mb-6 relative">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <FaBriefcase className="text-blue-400" size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <h3 className="font-orbitron font-bold text-xl text-white">Software Engineering Intern</h3>
                      <p className="text-blue-400 font-mono text-sm mt-0.5">ITJobxs Pvt. Ltd.</p>
                    </div>
                    <span className="badge bg-blue-500/10 text-blue-400 border border-blue-500/20">2024</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-4 relative">
                {HIGHLIGHTS.map(({ icon: Icon, text, color }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.12 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/2 transition-colors group"
                    style={{ borderLeft: `2px solid ${color}40` }}
                  >
                    <div className="p-2 rounded-lg mt-0.5 flex-shrink-0"
                      style={{ background: `${color}15`, color }}>
                      <Icon size={14} />
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{text}</p>
                  </motion.div>
                ))}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-white/5">
                {['Bootstrap', 'Google reCAPTCHA', 'Spam Prevention', 'Frontend Dev'].map(t => (
                  <span key={t} className="font-mono text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-400 border border-gray-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
