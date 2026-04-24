export default function MABLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mab-icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4361ee" />
          <stop offset="50%" stopColor="#3a0ca3" />
          <stop offset="100%" stopColor="#7209b7" />
        </linearGradient>
        <linearGradient id="mab-brace-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f72585" />
          <stop offset="100%" stopColor="#4361ee" />
        </linearGradient>
        <linearGradient id="mab-bracket-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4cc9f0" />
          <stop offset="100%" stopColor="#4361ee" />
        </linearGradient>
        <linearGradient id="mab-angle-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f72585" />
          <stop offset="100%" stopColor="#7209b7" />
        </linearGradient>
        <filter id="mab-icon-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
          <feFlood floodColor="#4361ee" floodOpacity="0.6" result="color" />
          <feComposite in="color" in2="blur" operator="in" result="glow" />
          <feComposite in="SourceGraphic" in2="glow" operator="over" />
        </filter>
      </defs>
      <polygon
        points="50,5 85,25 85,75 50,95 15,75 15,25"
        fill="none"
        stroke="url(#mab-icon-gradient)"
        strokeWidth="1"
        opacity="0.2"
      />
      <text
        x="25"
        y="55"
        fontFamily="monospace"
        fontSize="32"
        fontWeight="bold"
        fill="url(#mab-angle-gradient)"
        textAnchor="middle"
        dominantBaseline="middle"
        opacity="0.9"
      >
        {"<"}
      </text>
      <text
        x="38"
        y="55"
        fontFamily="monospace"
        fontSize="24"
        fontWeight="bold"
        fill="url(#mab-brace-gradient)"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {"{"}
      </text>
      <text
        x="50"
        y="52"
        fontFamily="cursive"
        fontSize="32"
        fontWeight="700"
        fill="url(#mab-icon-gradient)"
        textAnchor="middle"
        dominantBaseline="middle"
        filter="url(#mab-icon-glow)"
      >
        MAB
      </text>
      <text
        x="62"
        y="55"
        fontFamily="monospace"
        fontSize="24"
        fontWeight="bold"
        fill="url(#mab-brace-gradient)"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {"}"}
      </text>
      <text
        x="75"
        y="55"
        fontFamily="monospace"
        fontSize="32"
        fontWeight="bold"
        fill="url(#mab-angle-gradient)"
        textAnchor="middle"
        dominantBaseline="middle"
        opacity="0.9"
      >
        {">"}
      </text>
      <circle cx="50" cy="50" r="3" fill="url(#mab-icon-gradient)" opacity="0.7" />
    </svg>
  );
}
