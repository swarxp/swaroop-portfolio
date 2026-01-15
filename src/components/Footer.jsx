import { FaHeart } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark-200 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Copyright */}
                    <p className="text-gray-400 text-sm flex items-center gap-2">
                        © {currentYear} Swaroop Warade. Built with{' '}
                        <FaHeart className="text-red-500 animate-pulse" /> using React & Tailwind CSS
                    </p>

                    {/* Quick Links */}
                    <div className="flex items-center gap-6">
                        <a
                            href="#skills"
                            className="text-gray-400 hover:text-primary transition-colors text-sm"
                        >
                            Skills
                        </a>
                        <a
                            href="#projects"
                            className="text-gray-400 hover:text-primary transition-colors text-sm"
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-400 hover:text-primary transition-colors text-sm"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
