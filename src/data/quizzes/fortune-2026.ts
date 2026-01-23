import { QuizConfig } from '@/types/quiz';

export const fortune2026Quiz: QuizConfig = {
  id: 'fortune-2026',
  title: '2026년 나의 운세',
  description: '새해, 당신에게 찾아올 행운은?',
  questions: [
    {
      id: 1,
      text: '2026년 새해 첫날, 가장 먼저 하고 싶은 일은?',
      options: [
        { text: '새로운 목표와 계획 세우기', value: 'CAREER' },
        { text: '소중한 사람들과 시간 보내기', value: 'LOVE' },
        { text: '재테크 공부 시작하기', value: 'WEALTH' },
        { text: '건강 루틴 만들기', value: 'HEALTH' },
        { text: '여행 계획 짜기', value: 'ADVENTURE' },
      ],
    },
    {
      id: 2,
      text: '올해 가장 이루고 싶은 것은?',
      options: [
        { text: '승진이나 이직 성공', value: 'CAREER' },
        { text: '운명적인 만남', value: 'LOVE' },
        { text: '재정적 안정', value: 'WEALTH' },
        { text: '체력 증진과 건강 관리', value: 'HEALTH' },
        { text: '새로운 경험과 도전', value: 'ADVENTURE' },
      ],
    },
    {
      id: 3,
      text: '요즘 가장 관심 있는 분야는?',
      options: [
        { text: '자기계발과 커리어 성장', value: 'CAREER' },
        { text: '인간관계와 소통', value: 'LOVE' },
        { text: '투자와 재테크', value: 'WEALTH' },
        { text: '운동과 웰빙', value: 'HEALTH' },
        { text: '취미와 여가 활동', value: 'ADVENTURE' },
      ],
    },
    {
      id: 4,
      text: '갑자기 복권에 당첨된다면?',
      options: [
        { text: '사업이나 창업 자금으로 활용', value: 'CAREER' },
        { text: '가족과 연인에게 선물', value: 'LOVE' },
        { text: '안전하게 저축과 투자', value: 'WEALTH' },
        { text: '건강검진과 운동 시설 등록', value: 'HEALTH' },
        { text: '세계여행 떠나기', value: 'ADVENTURE' },
      ],
    },
    {
      id: 5,
      text: '힘든 일이 생겼을 때 나는?',
      options: [
        { text: '더 열심히 일하며 극복한다', value: 'CAREER' },
        { text: '가까운 사람들에게 위로받는다', value: 'LOVE' },
        { text: '실용적인 해결책을 찾는다', value: 'WEALTH' },
        { text: '충분한 휴식을 취한다', value: 'HEALTH' },
        { text: '새로운 환경으로 떠난다', value: 'ADVENTURE' },
      ],
    },
    {
      id: 6,
      text: '올해 가장 기대되는 순간은?',
      options: [
        { text: '중요한 프로젝트 성공', value: 'CAREER' },
        { text: '특별한 사람과의 추억', value: 'LOVE' },
        { text: '목표 저축액 달성', value: 'WEALTH' },
        { text: '건강한 몸 만들기', value: 'HEALTH' },
        { text: '버킷리스트 완성', value: 'ADVENTURE' },
      ],
    },
  ],
  results: [
    {
      value: 'CAREER',
      title: '🚀 커리어 대박의 해',
      description: '2026년은 당신의 커리어에 큰 전환점이 될 것입니다! 오랫동안 준비해온 프로젝트가 빛을 발하고, 능력을 인정받아 새로운 기회가 찾아올 것입니다. 상반기에 중요한 제안이 올 수 있으니 준비하세요!',
    },
    {
      value: 'LOVE',
      title: '💕 사랑 만개의 해',
      description: '2026년은 당신의 연애운이 최고조에 달합니다! 솔로라면 봄에 운명적인 만남이, 커플이라면 관계가 한 단계 발전할 수 있습니다. 주변 사람들과의 관계도 더욱 돈독해지는 한 해가 될 것입니다.',
    },
    {
      value: 'WEALTH',
      title: '💰 재물 풍성의 해',
      description: '2026년은 당신의 재정 상태가 크게 개선되는 해입니다! 예상치 못한 수입이 생기거나 투자에서 좋은 결과를 얻을 수 있습니다. 하반기에 특히 재테크에 집중하면 큰 성과를 거둘 것입니다.',
    },
    {
      value: 'HEALTH',
      title: '🏃 건강 활력의 해',
      description: '2026년은 당신의 건강과 체력이 크게 향상되는 해입니다! 새로운 운동을 시작하거나 건강한 습관을 만들기에 최적의 시기입니다. 몸과 마음이 모두 건강해지면서 삶의 질이 한층 높아질 것입니다.',
    },
    {
      value: 'ADVENTURE',
      title: '🌍 모험 가득의 해',
      description: '2026년은 당신에게 새로운 경험과 도전이 가득한 해입니다! 여행, 취미, 새로운 분야 도전 등 평소 하고 싶었던 일들을 실현할 기회가 많이 찾아올 것입니다. 두려워하지 말고 과감하게 도전하세요!',
    },
  ],
};
