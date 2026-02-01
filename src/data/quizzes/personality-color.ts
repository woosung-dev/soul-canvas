import { QuizConfig } from '@/types/quiz';

export const personalityColorQuiz: QuizConfig = {
  id: 'personality-color',
  title: {
    ko: '나의 성격 컬러 테스트',
    en: 'My Personality Color Test',
  },
  description: {
    ko: '당신의 성격을 색깔로 표현한다면?',
    en: 'What color represents your personality?',
  },
  questions: [
    {
      id: 1,
      text: {
        ko: '친구들이 나를 한 단어로 표현한다면?',
        en: 'How would friends describe you in one word?',
      },
      options: [
        { text: { ko: '열정적이고 에너지 넘치는', en: 'Passionate and Energetic' }, value: 'RED' },
        { text: { ko: '차분하고 신뢰할 수 있는', en: 'Calm and Reliable' }, value: 'BLUE' },
        { text: { ko: '밝고 긍정적인', en: 'Bright and Positive' }, value: 'YELLOW' },
        { text: { ko: '평화롭고 균형잡힌', en: 'Peaceful and Balanced' }, value: 'GREEN' },
      ],
    },
    {
      id: 2,
      text: {
        ko: '스트레스를 받을 때 나는?',
        en: 'When you are stressed, you...',
      },
      options: [
        { text: { ko: '운동이나 활동적인 것으로 풀어낸다', en: 'Exercise or do active things' }, value: 'RED' },
        { text: { ko: '혼자 조용히 생각을 정리한다', en: 'Organize thoughts alone quietly' }, value: 'BLUE' },
        { text: { ko: '친구들과 만나서 수다를 떤다', en: 'Chat with friends' }, value: 'YELLOW' },
        { text: { ko: '자연 속에서 산책하며 마음을 진정시킨다', en: 'Take a walk in nature' }, value: 'GREEN' },
      ],
    },
    {
      id: 3,
      text: {
        ko: '새로운 프로젝트를 시작할 때 나의 태도는?',
        en: 'When starting a new project...',
      },
      options: [
        { text: { ko: '일단 시작하고 보자! 빠르게 실행한다', en: 'Just start! Execute quickly' }, value: 'RED' },
        { text: { ko: '철저히 계획하고 분석한 후 시작한다', en: 'Plan thoroughly before starting' }, value: 'BLUE' },
        { text: { ko: '팀원들과 브레인스토밍하며 아이디어를 모은다', en: 'Brainstorm with team' }, value: 'YELLOW' },
        { text: { ko: '모두의 의견을 듣고 조율하며 진행한다', en: 'Listen and coordinate with everyone' }, value: 'GREEN' },
      ],
    },
    {
      id: 4,
      text: {
        ko: '주말에 가장 하고 싶은 활동은?',
        en: 'What do you want to do on weekends?',
      },
      options: [
        { text: { ko: '번지점프나 암벽등반 같은 익스트림 스포츠', en: 'Extreme sports' }, value: 'RED' },
        { text: { ko: '박물관이나 전시회 관람', en: 'Museum or exhibition' }, value: 'BLUE' },
        { text: { ko: '친구들과 파티나 페스티벌', en: 'Party or festival with friends' }, value: 'YELLOW' },
        { text: { ko: '공원에서 피크닉이나 요가', en: 'Picnic or yoga in the park' }, value: 'GREEN' },
      ],
    },
    {
      id: 5,
      text: {
        ko: '갈등 상황에서 나의 대처 방식은?',
        en: 'How do you handle conflict?',
      },
      options: [
        { text: { ko: '직설적으로 문제를 제기하고 해결한다', en: 'Confront and solve directly' }, value: 'RED' },
        { text: { ko: '논리적으로 분석하고 합리적인 해결책을 찾는다', en: 'Analyze logically for solution' }, value: 'BLUE' },
        { text: { ko: '유머로 분위기를 풀고 긍정적으로 접근한다', en: 'Use humor and positivity' }, value: 'YELLOW' },
        { text: { ko: '모두의 입장을 이해하고 중재한다', en: 'Understand and mediate' }, value: 'GREEN' },
      ],
    },
    {
      id: 6,
      text: {
        ko: '나에게 가장 중요한 가치는?',
        en: 'Most important value to you?',
      },
      options: [
        { text: { ko: '도전과 성취', en: 'Challenge and Achievement' }, value: 'RED' },
        { text: { ko: '진실과 정확성', en: 'Truth and Accuracy' }, value: 'BLUE' },
        { text: { ko: '즐거움과 창의성', en: 'Fun and Creativity' }, value: 'YELLOW' },
        { text: { ko: '조화와 평화', en: 'Harmony and Peace' }, value: 'GREEN' },
      ],
    },
    {
      id: 7,
      text: {
        ko: '의사결정을 할 때 나는?',
        en: 'When making decisions...',
      },
      options: [
        { text: { ko: '직감을 믿고 빠르게 결정한다', en: 'Trust intuition and decide fast' }, value: 'RED' },
        { text: { ko: '충분한 정보를 수집하고 신중하게 결정한다', en: 'Gather info and decide carefully' }, value: 'BLUE' },
        { text: { ko: '재미있고 흥미로운 선택을 한다', en: 'Choose fun and interesting option' }, value: 'YELLOW' },
        { text: { ko: '모두에게 좋은 선택을 고민한다', en: 'Consider best option for all' }, value: 'GREEN' },
      ],
    },
    {
      id: 8,
      text: {
        ko: '나의 이상적인 직업 환경은?',
        en: 'Ideal work environment?',
      },
      options: [
        { text: { ko: '경쟁적이고 역동적인 환경', en: 'Competitive and dynamic' }, value: 'RED' },
        { text: { ko: '체계적이고 전문적인 환경', en: 'Systematic and professional' }, value: 'BLUE' },
        { text: { ko: '자유롭고 창의적인 환경', en: 'Free and creative' }, value: 'YELLOW' },
        { text: { ko: '협력적이고 지원적인 환경', en: 'Cooperative and supportive' }, value: 'GREEN' },
      ],
    },
  ],
  results: [
    {
      value: 'RED',
      title: {
        ko: '🔴 레드 - 열정의 리더',
        en: '🔴 Red - Passionate Leader',
      },
      description: {
        ko: '당신은 에너지가 넘치고 도전을 즐기는 열정적인 성격입니다. 목표 지향적이며 빠른 실행력으로 주변 사람들에게 동기를 부여합니다. 때로는 성급할 수 있지만, 그 추진력으로 많은 것을 이뤄냅니다.',
        en: 'You are energetic and love challenges. Goal-oriented and quick to act, you motivate others. Impatient at times, but your drive achieves a lot.',
      },
    },
    {
      value: 'BLUE',
      title: {
        ko: '🔵 블루 - 신뢰의 분석가',
        en: '🔵 Blue - Reliable Analyst',
      },
      description: {
        ko: '당신은 차분하고 신중한 성격으로 깊이 있는 사고를 합니다. 논리적이고 체계적인 접근으로 문제를 해결하며, 주변 사람들에게 신뢰받는 조언자입니다. 완벽주의 성향이 있지만 그만큼 높은 품질의 결과를 만들어냅니다.',
        en: 'You are calm and thoughtful. Solving problems logically, you are a trusted advisor. A perfectionist, but you produce high-quality results.',
      },
    },
    {
      value: 'YELLOW',
      title: {
        ko: '🟡 옐로우 - 긍정의 크리에이터',
        en: '🟡 Yellow - Positive Creator',
      },
      description: {
        ko: '당신은 밝고 낙천적인 성격으로 주변을 즐겁게 만듭니다. 창의적이고 사교적이며 새로운 아이디어를 즐깁니다. 때로는 집중력이 흐트러질 수 있지만, 그 긍정 에너지로 어려운 상황도 즐겁게 만듭니다.',
        en: 'You are bright and optimistic. Creative and social, you love new ideas. Sometimes distracted, but your positive energy makes difficulties fun.',
      },
    },
    {
      value: 'GREEN',
      title: {
        ko: '🟢 그린 - 평화의 조화자',
        en: '🟢 Green - Peaceful Harmonizer',
      },
      description: {
        ko: '당신은 균형잡히고 평화로운 성격으로 조화를 중시합니다. 타인을 배려하고 갈등을 중재하는 능력이 뛰어나며, 안정적이고 신뢰할 수 있는 존재입니다. 때로는 우유부단할 수 있지만, 그 포용력으로 모두를 하나로 만듭니다.',
        en: 'You value balance and harmony. Caring and good at mediation, you are a stable presence. Indecisive at times, but your inclusiveness unites everyone.',
      },
    },
  ],
};
