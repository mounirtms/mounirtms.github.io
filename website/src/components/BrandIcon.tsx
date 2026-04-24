'use client';

import { useState, useEffect } from 'react';

interface BrandIconProps {
  brand: string;
  className?: string;
  size?: number;
}

const brandCache: Record<string, string> = {};

export default function BrandIcon({ brand, className = 'w-16 h-16', size = 128 }: BrandIconProps) {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchLogo = async () => {
      if (brandCache[brand]) {
        if (mounted) {
          setLogoUrl(brandCache[brand]);
          setLoading(false);
        }
        return;
      }

      try {
        const response = await fetch(
          `https://api.brandfetch.io/v2/search/${brand}?c=1idoTrpDzrSyVxxnR3d`,
          {
            headers: {
              'Authorization': 'Bearer unDIl5ubQG7RGBkWsLCkDbdKy1WAgi0Zda49pH3VLUgUe_L3RfYJ0q9gV9zsf-4XwGJ-6wKYWBMH6zXyMnND8A',
            },
          }
        );
        const data = await response.json();

        if (data && data[0] && data[0].verified) {
          const iconUrl = data[0].icon
            .replace('/w/128/h/128', `/w/${size}/h/${size}`)
            .replace('/fallback/lettermark/', '/t/paid/')
            .replace(/\.webp$/, '.svg');

          brandCache[brand] = iconUrl;

          if (mounted) {
            setLogoUrl(iconUrl);
          }
        } else if (data && data[0]) {
          const iconUrl = data[0].icon.replace('/w/128/h/128', `/w/${size}/h/${size}`);
          brandCache[brand] = iconUrl;

          if (mounted) {
            setLogoUrl(iconUrl);
          }
        }
      } catch (error) {
        console.error(`Failed to fetch logo for ${brand}:`, error);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchLogo();

    return () => {
      mounted = false;
    };
  }, [brand, size]);

  if (loading) {
    return (
      <div className={`${className} bg-gray-100 rounded-lg animate-pulse`} />
    );
  }

  if (!logoUrl) {
    return (
      <div className={`${className} bg-gray-100 rounded-lg flex items-center justify-center`}>
        <span className="text-gray-400 text-xs">{brand.charAt(0).toUpperCase()}</span>
      </div>
    );
  }

  return (
    <img
      src={logoUrl}
      alt={`${brand} logo`}
      className={className}
      style={{ objectFit: 'contain' }}
      loading="lazy"
    />
  );
}
