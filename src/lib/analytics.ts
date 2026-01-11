import { sendGAEvent } from '@next/third-parties/google';

export const ANALYTICS_EVENTS = {
  QUIZ_START: 'quiz_start',
  QUIZ_ANSWER: 'quiz_answer', // params: { question_id, answer_value }
  QUIZ_COMPLETE: 'quiz_complete', // params: { result_id }
  SHARE: 'share', // params: { method: 'copy_link' | 'native' | 'kakao' }
};

export const trackEvent = (eventName: string, params?: Record<string, string | number | boolean>) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[GA4 Event] ${eventName}`, params);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sendGAEvent('event', eventName, params as any);
};
