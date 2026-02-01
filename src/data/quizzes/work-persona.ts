import { QuizConfig } from '@/types/quiz';

export const workPersonaQuiz: QuizConfig = {
  id: 'work-persona',
  title: {
    ko: '직장인 유형 테스트',
    en: 'Workplace Persona Test',
  },
  description: {
    ko: '나는 회사에서 어떤 스타일의 동료일까?',
    en: 'What kind of colleague are you at work?',
  },
  questions: [
    {
      id: 1,
      text: {
        ko: '새로운 프로젝트가 시작되었다. 당신의 태도는?',
        en: 'A new project has started. Your attitude?',
      },
      options: [
        {
          text: {
            ko: '일단 자료조사부터 철저하게 시작한다.',
            en: 'Start with thorough research.',
          },
          value: 'Analyst',
        },
        {
          text: {
            ko: '팀원들과 아이디어 회의부터 잡는다.',
            en: 'Schedule a brainstorming session.',
          },
          value: 'Leader',
        },
      ],
    },
    {
      id: 2,
      text: {
        ko: '동료가 실수를 해서 멘붕에 빠졌다.',
        en: 'A colleague made a mistake and is panicking.',
      },
      options: [
        {
          text: {
            ko: '괜찮아, 누구나 실수할 수 있어. (위로)',
            en: 'It\'s okay, mistakes happen. (Comfort)',
          },
          value: 'Supporter',
        },
        {
          text: {
            ko: '어디서 문제가 생겼는지 같이 보자. (해결)',
            en: 'Let\'s see where it went wrong. (Solution)',
          },
          value: 'Analyst',
        },
      ],
    },
    {
      id: 3,
      text: {
        ko: '회식 장소를 정해야 한다.',
        en: 'Need to pick a place for team dinner.',
      },
      options: [
        {
          text: {
            ko: '내가 아는 맛집 리스트를 공유한다.',
            en: 'Share my list of best restaurants.',
          },
          value: 'Leader',
        },
        {
          text: {
            ko: '다른 사람들이 가자는 대로 따른다.',
            en: 'Follow whatever others want.',
          },
          value: 'Supporter',
        },
      ],
    },
  ],
  results: [
    {
      value: 'Leader',
      title: {
        ko: '카리스마 리더',
        en: 'Charismatic Leader',
      },
      description: {
        ko: '팀을 이끌고 방향을 제시하는 리더 스타일입니다.',
        en: 'You lead the team and propose directions.',
      },
    },
    {
      value: 'Analyst',
      title: {
        ko: '철두철미 분석가',
        en: 'Thorough Analyst',
      },
      description: {
        ko: '데이터와 논리를 바탕으로 문제를 해결하는 스타일입니다.',
        en: 'You solve problems based on data and logic.',
      },
    },
    {
      value: 'Supporter',
      title: {
        ko: '따뜻한 중재자',
        en: 'Warm Supporter',
      },
      description: {
        ko: '팀의 분위기를 좋게 만들고 동료를 챙기는 스타일입니다.',
        en: 'You maintain good team vibes and take care of colleagues.',
      },
    },
  ],
};
