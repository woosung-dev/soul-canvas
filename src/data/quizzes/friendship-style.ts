import { QuizConfig } from '@/types/quiz';

export const friendshipStyleQuiz: QuizConfig = {
  id: 'friendship-style',
  title: '나의 우정 스타일',
  description: '친구들 사이에서 나는 어떤 존재일까?',
  questions: [
    {
      id: 1,
      text: '친구가 힘들어할 때 나는?',
      options: [
        { text: '끝까지 옆에서 든든하게 지켜준다', value: 'LOYAL' },
        { text: '여러 친구들을 모아 힘을 북돋아준다', value: 'SOCIAL' },
        { text: '진지하게 대화하며 조언해준다', value: 'DEEP' },
        { text: '재미있는 활동으로 기분 전환시켜준다', value: 'FUN' },
      ],
    },
    {
      id: 2,
      text: '주말에 친구들과 만날 때 선호하는 방식은?',
      options: [
        { text: '단둘이 깊은 대화를 나눈다', value: 'LOYAL' },
        { text: '여러 명이서 왁자지껄하게 논다', value: 'SOCIAL' },
        { text: '카페에서 조용히 이야기 나눈다', value: 'DEEP' },
        { text: '액티비티나 새로운 장소를 탐험한다', value: 'FUN' },
      ],
    },
    {
      id: 3,
      text: '친구 관계에서 가장 중요하게 생각하는 것은?',
      options: [
        { text: '신뢰와 의리', value: 'LOYAL' },
        { text: '즐거움과 활기', value: 'SOCIAL' },
        { text: '이해와 공감', value: 'DEEP' },
        { text: '재미와 웃음', value: 'FUN' },
      ],
    },
    {
      id: 4,
      text: '새로운 사람을 만났을 때 나는?',
      options: [
        { text: '천천히 알아가며 친해진다', value: 'LOYAL' },
        { text: '금방 친해지고 여러 사람을 소개시켜준다', value: 'SOCIAL' },
        { text: '깊이 있는 대화로 친밀감을 쌓는다', value: 'DEEP' },
        { text: '유머로 분위기를 풀며 친해진다', value: 'FUN' },
      ],
    },
    {
      id: 5,
      text: '친구들이 나를 부를 때 주로 하는 말은?',
      options: [
        { text: '"너한테 고민 상담하면 진짜 든든해"', value: 'LOYAL' },
        { text: '"너 오면 분위기가 확 살아나"', value: 'SOCIAL' },
        { text: '"너랑 얘기하면 마음이 편해져"', value: 'DEEP' },
        { text: '"너랑 있으면 항상 웃겨 죽겠어"', value: 'FUN' },
      ],
    },
    {
      id: 6,
      text: '친구 생일에 나는?',
      options: [
        { text: '진심 담긴 편지와 의미있는 선물', value: 'LOYAL' },
        { text: '서프라이즈 파티 기획', value: 'SOCIAL' },
        { text: '친구가 진짜 원하는 것을 미리 파악해서 준비', value: 'DEEP' },
        { text: '재미있는 이벤트와 웃긴 선물', value: 'FUN' },
      ],
    },
    {
      id: 7,
      text: '친구들과의 단톡방에서 나의 역할은?',
      options: [
        { text: '조용하지만 중요한 순간에 나타나는 사람', value: 'LOYAL' },
        { text: '항상 활발하게 대화를 이끄는 사람', value: 'SOCIAL' },
        { text: '진지한 주제에 깊이있게 답하는 사람', value: 'DEEP' },
        { text: '밈과 드립으로 분위기 메이커', value: 'FUN' },
      ],
    },
    {
      id: 8,
      text: '오랜만에 친구를 만났을 때?',
      options: [
        { text: '그동안 어떻게 지냈는지 진심으로 궁금해한다', value: 'LOYAL' },
        { text: '다른 친구들 소식도 전하며 연결해준다', value: 'SOCIAL' },
        { text: '서로의 변화와 성장에 대해 깊이 이야기한다', value: 'DEEP' },
        { text: '옛날 추억 얘기하며 웃고 떠든다', value: 'FUN' },
      ],
    },
  ],
  results: [
    {
      value: 'LOYAL',
      title: '🛡️ 충직한 동반자',
      description: '당신은 친구들에게 가장 믿음직한 존재입니다. 언제나 곁에서 든든하게 지켜주고, 어려울 때 가장 먼저 달려가는 의리의 화신! 친구가 많지 않아도 깊고 진실한 관계를 유지합니다. 친구들은 당신을 평생의 친구로 여깁니다.',
    },
    {
      value: 'SOCIAL',
      title: '🎉 사교계의 나비',
      description: '당신은 친구들 사이의 연결고리입니다! 사람들을 모으고 분위기를 만드는 데 탁월한 재능이 있습니다. 폭넓은 인맥과 활발한 성격으로 어디서나 인기가 많으며, 친구들의 모임을 주선하고 새로운 인연을 만들어줍니다.',
    },
    {
      value: 'DEEP',
      title: '🧠 깊은 사색가',
      description: '당신은 친구들의 진정한 상담사입니다. 표면적인 대화보다 깊이 있는 소통을 선호하며, 친구들의 고민을 진심으로 들어주고 통찰력 있는 조언을 해줍니다. 소수의 친구와 깊은 유대감을 형성하며, 그들에게 없어서는 안 될 존재입니다.',
    },
    {
      value: 'FUN',
      title: '🎭 재미의 촉매제',
      description: '당신은 친구들의 비타민입니다! 어떤 상황에서도 웃음을 만들어내고 긍정적인 에너지를 전파합니다. 친구들과 함께할 때 항상 재미있는 아이디어를 내고, 지루한 순간을 즐거운 추억으로 바꿔놓습니다. 당신이 있는 곳엔 항상 웃음이 넘칩니다!',
    },
  ],
};
