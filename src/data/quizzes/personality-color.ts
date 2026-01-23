import { QuizConfig } from '@/types/quiz';

export const personalityColorQuiz: QuizConfig = {
  id: 'personality-color',
  title: '나의 성격 컬러 테스트',
  description: '당신의 성격을 색깔로 표현한다면?',
  questions: [
    {
      id: 1,
      text: '친구들이 나를 한 단어로 표현한다면?',
      options: [
        { text: '열정적이고 에너지 넘치는', value: 'RED' },
        { text: '차분하고 신뢰할 수 있는', value: 'BLUE' },
        { text: '밝고 긍정적인', value: 'YELLOW' },
        { text: '평화롭고 균형잡힌', value: 'GREEN' },
      ],
    },
    {
      id: 2,
      text: '스트레스를 받을 때 나는?',
      options: [
        { text: '운동이나 활동적인 것으로 풀어낸다', value: 'RED' },
        { text: '혼자 조용히 생각을 정리한다', value: 'BLUE' },
        { text: '친구들과 만나서 수다를 떤다', value: 'YELLOW' },
        { text: '자연 속에서 산책하며 마음을 진정시킨다', value: 'GREEN' },
      ],
    },
    {
      id: 3,
      text: '새로운 프로젝트를 시작할 때 나의 태도는?',
      options: [
        { text: '일단 시작하고 보자! 빠르게 실행한다', value: 'RED' },
        { text: '철저히 계획하고 분석한 후 시작한다', value: 'BLUE' },
        { text: '팀원들과 브레인스토밍하며 아이디어를 모은다', value: 'YELLOW' },
        { text: '모두의 의견을 듣고 조율하며 진행한다', value: 'GREEN' },
      ],
    },
    {
      id: 4,
      text: '주말에 가장 하고 싶은 활동은?',
      options: [
        { text: '번지점프나 암벽등반 같은 익스트림 스포츠', value: 'RED' },
        { text: '박물관이나 전시회 관람', value: 'BLUE' },
        { text: '친구들과 파티나 페스티벌', value: 'YELLOW' },
        { text: '공원에서 피크닉이나 요가', value: 'GREEN' },
      ],
    },
    {
      id: 5,
      text: '갈등 상황에서 나의 대처 방식은?',
      options: [
        { text: '직설적으로 문제를 제기하고 해결한다', value: 'RED' },
        { text: '논리적으로 분석하고 합리적인 해결책을 찾는다', value: 'BLUE' },
        { text: '유머로 분위기를 풀고 긍정적으로 접근한다', value: 'YELLOW' },
        { text: '모두의 입장을 이해하고 중재한다', value: 'GREEN' },
      ],
    },
    {
      id: 6,
      text: '나에게 가장 중요한 가치는?',
      options: [
        { text: '도전과 성취', value: 'RED' },
        { text: '진실과 정확성', value: 'BLUE' },
        { text: '즐거움과 창의성', value: 'YELLOW' },
        { text: '조화와 평화', value: 'GREEN' },
      ],
    },
    {
      id: 7,
      text: '의사결정을 할 때 나는?',
      options: [
        { text: '직감을 믿고 빠르게 결정한다', value: 'RED' },
        { text: '충분한 정보를 수집하고 신중하게 결정한다', value: 'BLUE' },
        { text: '재미있고 흥미로운 선택을 한다', value: 'YELLOW' },
        { text: '모두에게 좋은 선택을 고민한다', value: 'GREEN' },
      ],
    },
    {
      id: 8,
      text: '나의 이상적인 직업 환경은?',
      options: [
        { text: '경쟁적이고 역동적인 환경', value: 'RED' },
        { text: '체계적이고 전문적인 환경', value: 'BLUE' },
        { text: '자유롭고 창의적인 환경', value: 'YELLOW' },
        { text: '협력적이고 지원적인 환경', value: 'GREEN' },
      ],
    },
  ],
  results: [
    {
      value: 'RED',
      title: '🔴 레드 - 열정의 리더',
      description: '당신은 에너지가 넘치고 도전을 즐기는 열정적인 성격입니다. 목표 지향적이며 빠른 실행력으로 주변 사람들에게 동기를 부여합니다. 때로는 성급할 수 있지만, 그 추진력으로 많은 것을 이뤄냅니다.',
    },
    {
      value: 'BLUE',
      title: '🔵 블루 - 신뢰의 분석가',
      description: '당신은 차분하고 신중한 성격으로 깊이 있는 사고를 합니다. 논리적이고 체계적인 접근으로 문제를 해결하며, 주변 사람들에게 신뢰받는 조언자입니다. 완벽주의 성향이 있지만 그만큼 높은 품질의 결과를 만들어냅니다.',
    },
    {
      value: 'YELLOW',
      title: '🟡 옐로우 - 긍정의 크리에이터',
      description: '당신은 밝고 낙천적인 성격으로 주변을 즐겁게 만듭니다. 창의적이고 사교적이며 새로운 아이디어를 즐깁니다. 때로는 집중력이 흐트러질 수 있지만, 그 긍정 에너지로 어려운 상황도 즐겁게 만듭니다.',
    },
    {
      value: 'GREEN',
      title: '🟢 그린 - 평화의 조화자',
      description: '당신은 균형잡히고 평화로운 성격으로 조화를 중시합니다. 타인을 배려하고 갈등을 중재하는 능력이 뛰어나며, 안정적이고 신뢰할 수 있는 존재입니다. 때로는 우유부단할 수 있지만, 그 포용력으로 모두를 하나로 만듭니다.',
    },
  ],
};
