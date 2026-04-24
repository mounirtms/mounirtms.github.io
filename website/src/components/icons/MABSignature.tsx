export default function MABSignature({ className = "w-48 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sig-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4361ee" stopOpacity="0.9" />
          <stop offset="25%" stopColor="#7209b7" stopOpacity="1" />
          <stop offset="75%" stopColor="#f72585" stopOpacity="1" />
          <stop offset="100%" stopColor="#4cc9f0" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="sig-code-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4aa" />
          <stop offset="100%" stopColor="#4361ee" />
        </linearGradient>
      </defs>
      <text x="8" y="35" fontFamily="monospace" fontSize="24" fontWeight="bold" fill="url(#sig-code-gradient)" opacity="0.6">
        {"<"}
      </text>
      <text x="184" y="35" fontFamily="monospace" fontSize="24" fontWeight="bold" fill="url(#sig-code-gradient)" opacity="0.6">
        {"/>"}
      </text>
      <path d="M25 20 L25 40 M25 20 L35 35 L45 20 M45 20 L45 40"
        stroke="url(#sig-gradient)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M55 40 L60 20 L65 40 M57 32 L63 32"
        stroke="url(#sig-gradient)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M75 20 L75 40 M75 20 L82 20 Q87 20 87 25 Q87 30 82 30 L75 30 M75 30 L83 30 Q88 30 88 35 Q88 40 83 40 L75 40"
        stroke="url(#sig-gradient)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="100" cy="30" r="2" fill="url(#sig-gradient)" opacity="0.8" />
      <path d="M110 25 Q120 15 130 25 Q140 35 150 25 Q160 15 170 25"
        stroke="url(#sig-gradient)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path d="M25 45 Q100 42 175 45"
        stroke="url(#sig-gradient)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
      <circle cx="30" cy="12" r="1" fill="#4361ee" opacity="0.7" />
      <circle cx="100" cy="12" r="0.8" fill="#7209b7" opacity="0.6" />
      <circle cx="170" cy="12" r="1" fill="#f72585" opacity="0.7" />
      <text x="100" y="55" fontFamily="monospace" fontSize="6" fill="url(#sig-code-gradient)" textAnchor="middle" opacity="0.3">
        01001101 01000001 01000010
      </text>
    </svg>
  );
}
