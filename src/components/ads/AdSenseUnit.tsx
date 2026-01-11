'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

interface AdSenseUnitProps {
  slotId: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  responsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function AdSenseUnit({
  slotId,
  format = 'auto',
  responsive = true,
  className,
  style,
}: AdSenseUnitProps) {
  const pathname = usePathname();
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err: any) {
      console.error('AdSense error:', err?.message);
    }
  }, [pathname]); // Attempt refresh on path change if component stays mounted

  return (
    <div className={`ads-container overflow-hidden my-4 ${className || ''}`} aria-label="Advertisement">
        <div className="text-xs text-center text-zinc-400 mb-1">AD</div>
        <ins
            className="adsbygoogle block"
            style={style || { display: 'block' }}
            data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ID}
            data-ad-slot={slotId}
            data-ad-format={format}
            data-full-width-responsive={responsive ? 'true' : 'false'}
        />
    </div>
  );
}
