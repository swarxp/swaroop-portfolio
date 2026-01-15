const CircuitIcon = ({ className = "w-12 h-12" }) => {
    return (
        <svg
            className={className}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Circuit paths */}
            <path
                d="M10 50 H30 M70 50 H90"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <path
                d="M50 10 V30 M50 70 V90"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />

            {/* Central chip */}
            <rect
                x="35"
                y="35"
                width="30"
                height="30"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                rx="2"
            />

            {/* Chip pins */}
            <line x1="35" y1="42" x2="30" y2="42" stroke="currentColor" strokeWidth="1.5" />
            <line x1="35" y1="50" x2="30" y2="50" stroke="currentColor" strokeWidth="1.5" />
            <line x1="35" y1="58" x2="30" y2="58" stroke="currentColor" strokeWidth="1.5" />

            <line x1="65" y1="42" x2="70" y2="42" stroke="currentColor" strokeWidth="1.5" />
            <line x1="65" y1="50" x2="70" y2="50" stroke="currentColor" strokeWidth="1.5" />
            <line x1="65" y1="58" x2="70" y2="58" stroke="currentColor" strokeWidth="1.5" />

            <line x1="42" y1="35" x2="42" y2="30" stroke="currentColor" strokeWidth="1.5" />
            <line x1="50" y1="35" x2="50" y2="30" stroke="currentColor" strokeWidth="1.5" />
            <line x1="58" y1="35" x2="58" y2="30" stroke="currentColor" strokeWidth="1.5" />

            <line x1="42" y1="65" x2="42" y2="70" stroke="currentColor" strokeWidth="1.5" />
            <line x1="50" y1="65" x2="50" y2="70" stroke="currentColor" strokeWidth="1.5" />
            <line x1="58" y1="65" x2="58" y2="70" stroke="currentColor" strokeWidth="1.5" />

            {/* Corner nodes */}
            <circle cx="10" cy="50" r="3" fill="currentColor" />
            <circle cx="90" cy="50" r="3" fill="currentColor" />
            <circle cx="50" cy="10" r="3" fill="currentColor" />
            <circle cx="50" cy="90" r="3" fill="currentColor" />
        </svg>
    );
};

export default CircuitIcon;
