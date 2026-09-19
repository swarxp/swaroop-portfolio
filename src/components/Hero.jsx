import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaAws, FaDownload, FaCode } from 'react-icons/fa';
import { SiIeee } from 'react-icons/si';
import confetti from 'canvas-confetti';

const ROLES = [
  'Full-Stack Developer',
  'Electronics Engineer',
  'Cloud Practitioner',
  'MERN Stack Builder',
  'Embedded Systems Dev',
];

const Typewriter = ({ words }) => {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) {
      const t = setTimeout(() => setPause(false), 1500);
      return () => clearTimeout(t);
    }
    const word = words[idx];
    const speed = deleting ? 40 : 80;

    const t = setTimeout(() => {
      if (!deleting) {
        setDisplayed(word.slice(0, displayed.length + 1));
        if (displayed.length + 1 === word.length) {
          setPause(true);
          setDeleting(true);
        }
      } else {
        setDisplayed(word.slice(0, displayed.length - 1));
        if (displayed.length === 0) {
          setDeleting(false);
          setIdx((i) => (i + 1) % words.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [displayed, deleting, pause, idx, words]);

  return (
    <span>
      <span className="gradient-text">{displayed}</span>
      <span className="blink-cursor" style={{ background: '#0EA5E9', width: '3px', borderRadius: '2px' }} />
    </span>
  );
};

// Floating stat badge
const Stat = ({ value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5, type: 'spring' }}
    className="glass rounded-xl px-5 py-3 text-center"
    style={{ border: '1px solid rgba(14,165,233,0.2)' }}
  >
    <div className="text-2xl font-bold gradient-text font-orbitron">{value}</div>
    <div className="text-xs text-gray-500 font-mono mt-0.5">{label}</div>
  </motion.div>
);

const Hero = () => {
  const [clicked, setClicked] = useState(false);

  const handleNameClick = () => {
    setClicked(true);
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.4 },
      colors: ['#0EA5E9', '#10B981', '#8B5CF6', '#f59e0b'],
    });
    setTimeout(() => setClicked(false), 1000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-grid">
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #0EA5E9 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-8"
        style={{ background: 'radial-gradient(circle, #10B981 0%, transparent 70%)', filter: 'blur(80px)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)', filter: 'blur(100px)' }} />

      <div className="section-container relative z-10 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
          style={{ border: '1px solid rgba(16,185,129,0.3)' }}
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="font-mono text-xs text-green-400 tracking-widest">AVAILABLE FOR OPPORTUNITIES</span>
        </motion.div>

        {/* Name — click for confetti! */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={`font-orbitron text-5xl md:text-8xl font-black mb-4 leading-none select-none glitch ${clicked ? 'scale-105' : ''}`}
          data-text="Swaroop Warade"
          data-hover
          onClick={handleNameClick}
          style={{ cursor: 'none', transition: 'transform 0.2s' }}
        >
          <span className="gradient-text">Swaroop Warade</span>
        </motion.h1>

        {/* Click hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="font-mono text-xs text-gray-600 mb-6 tracking-widest"
        >
          ↑ click my name for a surprise ↑
        </motion.p>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-2xl md:text-3xl text-gray-300 font-light mb-3 h-10"
        >
          <Typewriter words={ROLES} />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-500 text-lg mb-10 max-w-xl mx-auto font-mono text-sm"
        >
          B.E. Electronics & Computer Science @ VIT<br />
          <span className="text-gray-600">Building where hardware meets software</span>
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="flex justify-center gap-4 flex-wrap mb-10"
        >
          <Stat value="8.05" label="CGPA" delay={1.0} />
          <Stat value="850+" label="Spam Blocked" delay={1.1} />
          <Stat value="3+" label="Projects" delay={1.2} />
          <Stat value="AWS" label="Certified" delay={1.3} />
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          {[
            { icon: FaGithub, label: 'GitHub', href: 'https://github.com/swarxp', color: '#e2e8f0' },
            { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/swaroopwarade', color: '#0A66C2' },
            { icon: FaAws, label: 'AWS Certified', href: '#', color: '#FF9900' },
            { icon: SiIeee, label: 'Research', href: 'https://ieeexplore.ieee.org/document/11676194', color: '#0066B2' },
          ].map(({ icon: Icon, label, href, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn flex items-center gap-2 glass px-5 py-3 rounded-xl text-sm font-medium hover:scale-105 transition-all duration-300"
              style={{ borderColor: `${color}30`, color }}
            >
              <Icon size={18} />
              {label}
            </a>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-gray-600 tracking-widest">SCROLL</span>
          <div className="w-5 h-9 border border-gray-700 rounded-full flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-2 bg-blue-400 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
