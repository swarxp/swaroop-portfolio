import { FaHeart, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="border-t py-10 text-center"
    style={{ borderColor: 'rgba(255,255,255,0.05)', background: 'rgba(5,5,5,0.8)' }}>
    <div className="font-orbitron text-lg gradient-text font-bold mb-3">SW</div>
    <p className="font-mono text-xs text-gray-600 flex items-center justify-center gap-2">
      Built with <FaHeart className="text-red-500 animate-pulse" size={10} /> using React & Tailwind CSS
    </p>
    <p className="font-mono text-xs text-gray-700 mt-1">
      © {new Date().getFullYear()} Swaroop Warade. All rights reserved.
    </p>
    <div className="flex justify-center gap-4 mt-4">
      <a href="https://github.com/swarxp" target="_blank" rel="noopener noreferrer"
        className="text-gray-600 hover:text-white transition-colors">
        <FaGithub size={16} />
      </a>
      <a href="https://linkedin.com/in/swaroopwarade" target="_blank" rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-400 transition-colors">
        <FaLinkedin size={16} />
      </a>
    </div>
  </footer>
);

export default Footer;
