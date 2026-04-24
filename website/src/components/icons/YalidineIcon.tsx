export default function YalidineIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <img 
      src="/assets/yalidine-logo.png" 
      alt="Yalidine Express" 
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}
