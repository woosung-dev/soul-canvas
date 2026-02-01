import { QuizConfig } from '@/types/quiz';

export const fortune2026Quiz: QuizConfig = {
  id: 'fortune-2026',
  title: {
    ko: '2026년 나의 운세',
    en: 'My 2026 Fortune',
  },
  description: {
    ko: '새해, 당신에게 찾아올 행운은?',
    en: 'What luck will find you in the New Year?',
  },
  questions: [
    {
      id: 1,
      text: {
        ko: '2026년 새해 첫날, 가장 먼저 하고 싶은 일은?',
        en: 'First thing you want to do on New Year\'s Day 2026?',
      },
      options: [
        { text: { ko: '새로운 목표와 계획 세우기', en: 'Set new goals' }, value: 'CAREER' },
        { text: { ko: '소중한 사람들과 시간 보내기', en: 'Spend time with loved ones' }, value: 'LOVE' },
        { text: { ko: '재테크 공부 시작하기', en: 'Start studying finance' }, value: 'WEALTH' },
        { text: { ko: '건강 루틴 만들기', en: 'Create a health routine' }, value: 'HEALTH' },
        { text: { ko: '여행 계획 짜기', en: 'Plan a trip' }, value: 'ADVENTURE' },
      ],
    },
    {
      id: 2,
      text: {
        ko: '올해 가장 이루고 싶은 것은?',
        en: 'What do you want to achieve most?',
      },
      options: [
        { text: { ko: '승진이나 이직 성공', en: 'Promotion or new job' }, value: 'CAREER' },
        { text: { ko: '운명적인 만남', en: 'Fateful encounter' }, value: 'LOVE' },
        { text: { ko: '재정적 안정', en: 'Financial stability' }, value: 'WEALTH' },
        { text: { ko: '체력 증진과 건강 관리', en: 'Improve fitness and health' }, value: 'HEALTH' },
        { text: { ko: '새로운 경험과 도전', en: 'New experiences and challenges' }, value: 'ADVENTURE' },
      ],
    },
    {
      id: 3,
      text: {
        ko: '요즘 가장 관심 있는 분야는?',
        en: 'What are you interested in lately?',
      },
      options: [
        { text: { ko: '자기계발과 커리어 성장', en: 'Self-development and career' }, value: 'CAREER' },
        { text: { ko: '인간관계와 소통', en: 'Relationships and communication' }, value: 'LOVE' },
        { text: { ko: '투자와 재테크', en: 'Investment and finance' }, value: 'WEALTH' },
        { text: { ko: '운동과 웰빙', en: 'Exercise and well-being' }, value: 'HEALTH' },
        { text: { ko: '취미와 여가 활동', en: 'Hobbies and leisure' }, value: 'ADVENTURE' },
      ],
    },
    {
      id: 4,
      text: {
        ko: '갑자기 복권에 당첨된다면?',
        en: 'If you won the lottery...',
      },
      options: [
        { text: { ko: '사업이나 창업 자금으로 활용', en: 'Use for business capital' }, value: 'CAREER' },
        { text: { ko: '가족과 연인에게 선물', en: 'Gift to family and partner' }, value: 'LOVE' },
        { text: { ko: '안전하게 저축과 투자', en: 'Save and invest safely' }, value: 'WEALTH' },
        { text: { ko: '건강검진과 운동 시설 등록', en: 'Health checkup and gym' }, value: 'HEALTH' },
        { text: { ko: '세계여행 떠나기', en: 'Go on a world tour' }, value: 'ADVENTURE' },
      ],
    },
    {
      id: 5,
      text: {
        ko: '힘든 일이 생겼을 때 나는?',
        en: 'When things get tough...',
      },
      options: [
        { text: { ko: '더 열심히 일하며 극복한다', en: 'Work harder to overcome' }, value: 'CAREER' },
        { text: { ko: '가까운 사람들에게 위로받는다', en: 'Get comfort from loved ones' }, value: 'LOVE' },
        { text: { ko: '실용적인 해결책을 찾는다', en: 'Find practical solutions' }, value: 'WEALTH' },
        { text: { ko: '충분한 휴식을 취한다', en: 'Take enough rest' }, value: 'HEALTH' },
        { text: { ko: '새로운 환경으로 떠난다', en: 'Leave for a new environment' }, value: 'ADVENTURE' },
      ],
    },
    {
      id: 6,
      text: {
        ko: '올해 가장 기대되는 순간은?',
        en: 'Most anticipated moment this year?',
      },
      options: [
        { text: { ko: '중요한 프로젝트 성공', en: 'Important project success' }, value: 'CAREER' },
        { text: { ko: '특별한 사람과의 추억', en: 'Memories with special person' }, value: 'LOVE' },
        { text: { ko: '목표 저축액 달성', en: 'Reaching savings goal' }, value: 'WEALTH' },
        { text: { ko: '건강한 몸 만들기', en: 'Building a healthy body' }, value: 'HEALTH' },
        { text: { ko: '버킷리스트 완성', en: 'Completing bucket list' }, value: 'ADVENTURE' },
      ],
    },
  ],
  results: [
    {
      value: 'CAREER',
      title: {
        ko: '🚀 커리어 대박의 해',
        en: '🚀 Career Breakthrough',
      },
      description: {
        ko: '2026년은 당신의 커리어에 큰 전환점이 될 것입니다! 오랫동안 준비해온 프로젝트가 빛을 발하고, 능력을 인정받아 새로운 기회가 찾아올 것입니다. 상반기에 중요한 제안이 올 수 있으니 준비하세요!',
        en: '2026 will be a turning point for your career! Projects will shine and new opportunities will arise. Be ready for a major offer in the first half!',
      },
    },
    {
      value: 'LOVE',
      title: {
        ko: '💕 사랑 만개의 해',
        en: '💕 Full of Love',
      },
      description: {
        ko: '2026년은 당신의 연애운이 최고조에 달합니다! 솔로라면 봄에 운명적인 만남이, 커플이라면 관계가 한 단계 발전할 수 있습니다. 주변 사람들과의 관계도 더욱 돈독해지는 한 해가 될 것입니다.',
        en: 'Your love luck peaks in 2026! Singles might find fateful encounters in spring, couples will deepen their bond.',
      },
    },
    {
      value: 'WEALTH',
      title: {
        ko: '💰 재물 풍성의 해',
        en: '💰 Abundant Wealth',
      },
      description: {
        ko: '2026년은 당신의 재정 상태가 크게 개선되는 해입니다! 예상치 못한 수입이 생기거나 투자에서 좋은 결과를 얻을 수 있습니다. 하반기에 특히 재테크에 집중하면 큰 성과를 거둘 것입니다.',
        en: 'Your finances will improve significantly! Unexpected income or good investment results await. Focus on finance in the second half for big wins.',
      },
    },
    {
      value: 'HEALTH',
      title: {
        ko: '🏃 건강 활력의 해',
        en: '🏃 Vitality and Health',
      },
      description: {
        ko: '2026년은 당신의 건강과 체력이 크게 향상되는 해입니다! 새로운 운동을 시작하거나 건강한 습관을 만들기에 최적의 시기입니다. 몸과 마음이 모두 건강해지면서 삶의 질이 한층 높아질 것입니다.',
        en: 'Great year for health! Perfect time to start new workouts or healthy habits. Assuming body and mind health improves quality of life.',
      },
    },
    {
      value: 'ADVENTURE',
      title: {
        ko: '🌍 모험 가득의 해',
        en: '🌍 Full of Adventure',
      },
      description: {
        ko: '2026년은 당신에게 새로운 경험과 도전이 가득한 해입니다! 여행, 취미, 새로운 분야 도전 등 평소 하고 싶었던 일들을 실현할 기회가 많이 찾아올 것입니다. 두려워하지 말고 과감하게 도전하세요!',
        en: 'A year full of new experiences! Travel, hobbies, and new challenges await. Don\'t be afraid and dive in!',
      },
    },
  ],
};
