import { QuizConfig } from '@/types/quiz';



export const loveStyleQuiz: QuizConfig = {
  id: 'love-style',
  title: {
    ko: '연애 스타일 테스트',
    en: 'Love Style Test',
  },
  description: {
    ko: '나의 연애 스타일은 어떤 유형일까?',
    en: 'What is your dating style?',
  },
  questions: [
    {
      id: 1,
      text: {
        ko: '주말 오후, 갑작스럽게 약속이 취소되었다. 당신의 반응은?',
        en: 'Weekend plans got cancelled last minute. Your reaction?',
      },
      options: [
        {
          text: {
            ko: '오예! 집에서 넷플릭스 보면서 뒹굴거리자.',
            en: 'Yay! Time to binge Netflix at home.',
          },
          value: 'I',
        },
        {
          text: {
            ko: '아쉬운데... 다른 친구에게 연락해볼까?',
            en: 'Bummer... Should I call another friend?',
          },
          value: 'E',
        },
        {
          text: {
            ko: '혼자서라도 나가서 카페 가서 책 읽어야지.',
            en: 'I will go to a cafe and read a book alone.',
          },
          value: 'I',
        },
      ],
    },
    {
      id: 2,
      text: {
        ko: '연인과 다퉜을 때, 당신의 화해 방식은?',
        en: 'How do you make up after a fight with your partner?',
      },
      options: [
        {
          text: {
            ko: '시간을 갖고 감정이 가라앉으면 대화한다.',
            en: 'Give it time and talk when cooled down.',
          },
          value: 'T',
        },
        {
          text: {
            ko: '바로바로 풀고 넘어가야 직성이 풀린다.',
            en: 'Must resolve it immediately.',
          },
          value: 'F',
        },
        {
          text: {
            ko: '맛있는 거 먹으러 가자고 하면서 푼다.',
            en: 'Let\'s go eat something delicious.',
          },
          value: 'F',
        },
      ],
    },
    {
      id: 3,
      text: {
        ko: '데이트 장소를 결정할 때 나는?',
        en: 'When deciding on a date spot, you...',
      },
      options: [
        {
          text: {
            ko: '맛집, 핫플 리스트를 쫙 뽑아간다.',
            en: 'Have a list of hot places ready.',
          },
          value: 'J',
        },
        {
          text: {
            ko: '일단 만나서 기분 따라 결정한다.',
            en: 'Decide based on the mood after meeting.',
          },
          value: 'P',
        },
        {
          text: {
            ko: '상대방이 가고 싶은 곳으로 간다.',
            en: 'Go wherever my partner wants.',
          },
          value: 'P',
        },
      ],
    },
    // Adding more questions for better distribution if needed, but keeping it simple for now.
  ],
  results: [
    {
      value: 'E',
      title: {
        ko: '핵인싸 분위기 메이커',
        en: 'Social Butterfly',
      },
      description: {
        ko: '사람들과 어울리는 것을 좋아하고 에너지가 넘치는 당신! 연애에서도 활발하고 적극적인 모습을 보여줍니다.',
        en: 'You love being around people and have endless energy! You are active and passionate in relationships.',
      },
    },
    {
      value: 'I',
      title: {
        ko: '집돌이/집순이 힐러',
        en: 'Homebody Healer',
      },
      description: {
        ko: '혼자만의 시간이 중요하고 차분한 당신. 연인에게 편안하고 안정적인 쉼터가 되어줍니다.',
        en: 'You value alone time and calmness. You provide a comfortable and stable shelter for your partner.',
      },
    },
    {
      value: 'T',
      title: {
        ko: '논리적인 해결사',
        en: 'Logical Problem Solver',
      },
      description: {
        ko: '문제가 생기면 이성적으로 분석하고 해결책을 제시하는 든든한 스타일입니다.',
        en: 'You analyze problems rationally and provide reliable solutions.',
      },
    },
    {
      value: 'F',
      title: {
        ko: '공감 능력 만렙',
        en: 'Empathy Master',
      },
      description: {
        ko: '상대방의 감정을 잘 캐치하고 따뜻한 위로를 건네는 다정다감한 스타일입니다.',
        en: 'You catch others\' feelings well and offer warm comfort.',
      },
    },
    {
      value: 'J',
      title: {
        ko: '철저한 계획파',
        en: 'Detailed Planner',
      },
      description: {
        ko: '데이트 코스부터 기념일까지 꼼꼼하게 챙기는 완벽주의자 스타일입니다.',
        en: 'A perfectionist who takes care of everything from date courses to anniversaries.',
      },
    },
    {
      value: 'P',
      title: {
        ko: '자유로운 영혼',
        en: 'Free Spirit',
      },
      description: {
        ko: '틀에 박힌 것보단 즉흥적인 설렘을 즐기는 유연한 스타일입니다.',
        en: 'Flexible style enjoying spontaneous excitement rather than routine.',
      },
    },
  ],
};
