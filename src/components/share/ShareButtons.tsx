'use client';

import { useState } from 'react';
import { trackEvent, ANALYTICS_EVENTS } from '@/lib/analytics';

export function ShareButtons() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      trackEvent(ANALYTICS_EVENTS.SHARE, { method: 'copy_link' });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        });
        trackEvent(ANALYTICS_EVENTS.SHARE, { method: 'native' });
      } catch (err) {
        console.error('Error sharing', err);
      }
    } else {
        handleCopyLink();
    }
  };

  return (
    <div className="flex gap-4 mt-8 w-full max-w-sm">
      <button
        onClick={handleCopyLink}
        className="flex-1 py-4 rounded-xl bg-zinc-100 dark:bg-zinc-800 font-bold text-zinc-700 dark:text-zinc-200 transition-transform active:scale-95"
      >
        {copied ? '✅ 복사 완료!' : '🔗 링크 복사'}
      </button>
      <button
        onClick={handleShare}
        className="flex-1 py-4 rounded-xl bg-yellow-300 text-black font-bold transition-transform active:scale-95"
      >
        💬 공유하기
      </button>
    </div>
  );
}
