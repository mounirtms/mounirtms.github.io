'use client';

interface BrandIconProps {
  brand: string;
  className?: string;
  size?: number;
}

export default function BrandIcon({ brand, className = 'w-16 h-16', size = 64 }: BrandIconProps) {
  return (
    <div
      className={`${className} bg-gray-100 rounded-lg flex items-center justify-center`}
      style={{ width: size, height: size }}
    >
      <span className="text-gray-400 text-xs font-medium">{brand.charAt(0).toUpperCase()}</span>
    </div>
  );
}
