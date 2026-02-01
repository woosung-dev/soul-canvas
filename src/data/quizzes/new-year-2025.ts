import { QuizConfig } from '@/types/quiz';

export const newYear2025Quiz: QuizConfig = {
  id: 'new-year-2025',
  title: {
    ko: '2025년 신년 운세 뽑기',
    en: '2025 New Year Fortune Draw',
  },
  description: {
    ko: '카드를 한 장 뽑아 당신의 2025년 핵심 키워드를 확인하세요!',
    en: 'Draw a card to reveal your key word for 2025!',
  },
  questions: [
    {
      id: 1,
      text: {
        ko: '2025년, 당신의 운명을 결정할 카드를 선택하세요.',
        en: 'Choose a card that will decide your destiny in 2025.',
      },
      options: [
        { text: { ko: '첫 번째 신비로운 카드', en: 'First Mysterious Card' }, value: 'GROWTH' },
        { text: { ko: '두 번째 빛나는 카드', en: 'Second Shining Card' }, value: 'WEALTH' },
        { text: { ko: '세 번째 따뜻한 카드', en: 'Third Warm Card' }, value: 'LOVE' },
      ],
    },
  ],
  results: [
    {
      value: 'GROWTH',
      title: {
        ko: '🌱 폭풍 성장의 해',
        en: '🌱 Year of Rapid Growth',
      },
      description: {
        ko: '2025년은 당신이 뿌린 씨앗이 거대한 나무로 자라나는 해입니다. 그동안의 노력이 결실을 맺고, 개인적으로나 직업적으로 큰 도약을 이루게 될 것입니다. 배움의 기회를 놓치지 마세요!',
        en: '2025 is the year your seeds grow into giant trees. Your efforts will bear fruit, leading to a huge leap personally and professionally.',
      },
    },
    {
      value: 'WEALTH',
      title: {
        ko: '💰 황금 재물의 해',
        en: '💰 Year of Golden Wealth',
      },
      description: {
        ko: '2025년은 당신에게 풍요로움이 쏟아지는 해입니다. 예상치 못한 수익이나 투자의 성공이 기대됩니다. 하지만 자만하지 않고 현명하게 관리한다면 더 큰 부를 쌓을 수 있습니다.',
        en: '2025 brings abundance to you. Unexpected income or investment success is expected. Manage it wisely to build even greater wealth.',
      },
    },
    {
      value: 'LOVE',
      title: {
        ko: '💖 핑크빛 사랑의 해',
        en: '💖 Year of Pink Love',
      },
      description: {
        ko: '2025년은 사랑과 인간관계가 꽃피는 해입니다. 소중한 인연을 만나거나, 기존의 관계가 더욱 깊어질 것입니다. 마음을 열고 다가오는 사람들을 따뜻하게 맞이하세요.',
        en: '2025 is the year love and relationships bloom. You will meet precious connections or deepen existing ones. Open your heart!',
      },
    },
  ],
};
