import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap, FaExternalLinkAlt, FaFlask } from 'react-icons/fa';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" className="section-container">
      <div ref={ref}>
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}>
          <div className="section-tag justify-center">Background</div>
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 font-orbitron">
            <span className="gradient-text">Education & Research</span>
          </h2>
          <p className="text-center text-gray-500 font-mono text-sm mb-14">
            The foundation that drives innovation
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rotating-border rounded-2xl p-px"
          >
            <div className="glass rounded-2xl p-7 h-full"
              style={{ background: 'rgba(10,15,20,0.9)' }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <FaGraduationCap className="text-blue-400" size={22} />
                </div>
                <span className="font-mono text-xs text-blue-400 tracking-widest">BACHELOR OF ENGINEERING</span>
              </div>

              <h3 className="font-orbitron text-2xl font-bold mb-1 text-white">Electronics & CS</h3>
              <p className="text-gray-500 font-mono text-sm mb-5">Vellore Institute of Technology (VIT)</p>

              <div className="flex items-center gap-3">
                <div className="flex-1 bg-gray-800/50 rounded-xl overflow-hidden h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '80.5%' } : {}}
                    transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #0EA5E9, #10B981)' }}
                  />
                </div>
                <div className="text-right">
                  <div className="font-orbitron text-2xl font-black gradient-text">8.05</div>
                  <div className="font-mono text-xs text-gray-500">CGPA / 10</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Research Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="glass rounded-2xl p-7 relative overflow-hidden group"
            style={{ border: '1px solid rgba(16,185,129,0.2)' }}
          >
            {/* Green glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
              style={{ background: 'radial-gradient(circle, #10B981, transparent)', filter: 'blur(30px)' }} />

            <div className="flex items-center gap-3 mb-5 relative">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <FaFlask className="text-emerald-400" size={20} />
              </div>
              <span className="font-mono text-xs text-emerald-400 tracking-widest">IEEE PUBLICATION</span>
            </div>

            <h3 className="font-orbitron text-xl font-bold mb-2 text-white leading-tight relative">
              Semiconductor Wafer<br />Defect Identification
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 relative">
              Research on advanced defect detection methodologies in semiconductor manufacturing,
              bridging electronics & AI at the hardware-software boundary.
            </p>

            <a
              href="https://ieeexplore.ieee.org/document/11676194"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all relative"
              style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981', border: '1px solid rgba(16,185,129,0.3)' }}
            >
              <FaExternalLinkAlt size={12} />
              View on IEEE Xplore
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
