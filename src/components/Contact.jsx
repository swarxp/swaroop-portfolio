import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaTerminal } from 'react-icons/fa';

const TERMINAL_LINES = [
  { type: 'prompt', cmd: 'whoami', delay: 500 },
  { type: 'output', text: 'swaroop_warade', delay: 900 },
  { type: 'prompt', cmd: 'cat contact.json', delay: 1400 },
  { type: 'output', text: '{', delay: 1700 },
  { type: 'output', text: '  "email": "waradeswaroop@gmail.com",', delay: 1900 },
  { type: 'output', text: '  "github": "github.com/swarxp",', delay: 2100 },
  { type: 'output', text: '  "linkedin": "swaroopwarade",', delay: 2300 },
  { type: 'output', text: '  "status": "open_to_work"', delay: 2500 },
  { type: 'output', text: '}', delay: 2700 },
  { type: 'prompt', cmd: 'echo "Let\'s build something awesome"', delay: 3200 },
  { type: 'output', text: "Let's build something awesome", delay: 3700 },
  { type: 'cursor', delay: 4000 },
];

const TerminalLine = ({ line }) => {
  if (line.type === 'prompt') return (
    <div>
      <span className="terminal-prompt">swaroop@portfolio </span>
      <span className="text-gray-600">~ </span>
      <span className="terminal-command">$ {line.cmd}</span>
    </div>
  );
  if (line.type === 'output') return (
    <div className="terminal-output pl-4">{line.text}</div>
  );
  if (line.type === 'cursor') return (
    <div>
      <span className="terminal-prompt">swaroop@portfolio </span>
      <span className="text-gray-600">~ </span>
      <span className="terminal-command">$ </span>
      <span className="blink-cursor" />
    </div>
  );
  return null;
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    if (!isInView) return;
    TERMINAL_LINES.forEach((line) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, line]);
      }, line.delay);
    });
  }, [isInView]);

  return (
    <section id="contact" className="section-container">
      <div ref={ref}>
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}>
          <div className="section-tag justify-center">Get In Touch</div>
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 font-orbitron">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <p className="text-center text-gray-500 font-mono text-sm mb-14">
            Open for internships, collaborations & interesting problems
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Terminal window */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="terminal mb-8"
          >
            <div className="terminal-header">
              <div className="terminal-btn" style={{ background: '#ef4444' }} />
              <div className="terminal-btn" style={{ background: '#f59e0b' }} />
              <div className="terminal-btn" style={{ background: '#10B981' }} />
              <span className="font-mono text-xs text-gray-500 ml-3">
                <FaTerminal className="inline mr-1.5" size={10} />
                contact.sh
              </span>
            </div>
            <div className="terminal-body space-y-1">
              {visibleLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <TerminalLine line={line} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Action links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {[
              {
                icon: FaEnvelope,
                label: 'Send Email',
                sub: 'waradeswaroop@gmail.com',
                href: 'mailto:waradeswaroop@gmail.com',
                color: '#0EA5E9',
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                icon: FaGithub,
                label: 'GitHub',
                sub: 'github.com/swarxp',
                href: 'https://github.com/swarxp',
                color: '#e2e8f0',
                gradient: 'from-gray-600 to-gray-500',
              },
              {
                icon: FaLinkedin,
                label: 'LinkedIn',
                sub: 'in/swaroopwarade',
                href: 'https://linkedin.com/in/swaroopwarade',
                color: '#0A66C2',
                gradient: 'from-blue-700 to-blue-500',
              },
            ].map(({ icon: Icon, label, sub, href, color, gradient }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn glass rounded-2xl p-5 flex flex-col items-center text-center gap-2 hover:scale-105 transition-all duration-300 group"
                style={{ border: `1px solid ${color}20` }}
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient} bg-opacity-20`}>
                  <Icon size={22} style={{ color }} />
                </div>
                <span className="font-semibold text-sm text-white">{label}</span>
                <span className="font-mono text-xs text-gray-500 group-hover:text-gray-400 transition-colors">{sub}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
