import { QuizConfig } from '@/types/quiz';

export const loveStyleQuiz: QuizConfig = {
  id: 'love-style',
  title: '연애 스타일 테스트',
  description: '나의 연애 스타일은 어떤 유형일까?',
  questions: [
    {
      id: 1,
      text: '주말 오후, 갑작스럽게 약속이 취소되었다. 당신의 반응은?',
      options: [
        { text: '오예! 집에서 넷플릭스 보면서 뒹굴거리자.', value: 'I' },
        { text: '아쉬운데... 다른 친구에게 연락해볼까?', value: 'E' },
        { text: '혼자서라도 나가서 카페 가서 책 읽어야지.', value: 'I' },
      ],
    },
    {
      id: 2,
      text: '연인과 다퉜을 때, 당신의 화해 방식은?',
      options: [
        { text: '시간을 갖고 감정이 가라앉으면 대화한다.', value: 'T' },
        { text: '바로바로 풀고 넘어가야 직성이 풀린다.', value: 'F' },
        { text: '맛있는 거 먹으러 가자고 하면서 푼다.', value: 'F' },
      ],
    },
    {
      id: 3,
      text: '데이트 장소를 결정할 때 나는?',
      options: [
        { text: '맛집, 핫플 리스트를 쫙 뽑아간다.', value: 'J' },
        { text: '일단 만나서 기분 따라 결정한다.', value: 'P' },
        { text: '상대방이 가고 싶은 곳으로 간다.', value: 'P' },
      ],
    },
    // Adding more questions for better distribution if needed, but keeping it simple for now.
  ],
  results: [
    {
      value: 'E',
      title: '핵인싸 분위기 메이커',
      description: '사람들과 어울리는 것을 좋아하고 에너지가 넘치는 당신! 연애에서도 활발하고 적극적인 모습을 보여줍니다.',
    },
    {
      value: 'I',
      title: '집돌이/집순이 힐러',
      description: '혼자만의 시간이 중요하고 차분한 당신. 연인에게 편안하고 안정적인 쉼터가 되어줍니다.',
    },
    {
      value: 'T',
      title: '논리적인 해결사',
      description: '문제가 생기면 이성적으로 분석하고 해결책을 제시하는 든든한 스타일입니다.',
    },
    {
      value: 'F',
      title: '공감 능력 만렙',
      description: '상대방의 감정을 잘 캐치하고 따뜻한 위로를 건네는 다정다감한 스타일입니다.',
    },
    {
      value: 'J',
      title: '철저한 계획파',
      description: '데이트 코스부터 기념일까지 꼼꼼하게 챙기는 완벽주의자 스타일입니다.',
    },
    {
      value: 'P',
      title: '자유로운 영혼',
      description: '틀에 박힌 것보단 즉흥적인 설렘을 즐기는 유연한 스타일입니다.',
    },
  ],
};
