import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaBars, FaTimes } from 'react-icons/fa';

const NAV_LINKS = [
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass shadow-lg shadow-black/40 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="font-orbitron text-xl font-bold gradient-text tracking-widest"
          >
            SW
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                onClick={(e) => scrollTo(e, href)}
                className="font-mono text-sm text-gray-400 hover:text-white animated-underline transition-colors duration-300"
              >
                {name}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1v504dA1XC2PTlyMYDuLF0dwY8nPidMen/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold text-white"
              style={{ background: 'linear-gradient(135deg, #0EA5E9, #10B981)' }}
            >
              <FaDownload className="text-xs" />
              Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden glass border-t border-white/5 px-6 py-4 flex flex-col gap-4"
          >
            {NAV_LINKS.map(({ name, href }) => (
              <a key={name} href={href} onClick={(e) => scrollTo(e, href)}
                className="font-mono text-sm text-gray-300 hover:text-white py-2 border-b border-white/5">
                <span className="text-blue-400 mr-2">{'>'}</span>{name}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1v504dA1XC2PTlyMYDuLF0dwY8nPidMen/view?usp=sharing"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold text-white mt-2"
              style={{ background: 'linear-gradient(135deg, #0EA5E9, #10B981)' }}
            >
              <FaDownload className="text-xs" /> Resume
            </a>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;
