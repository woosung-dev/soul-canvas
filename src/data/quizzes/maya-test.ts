import { QuizConfig } from '@/types/quiz';

export const mayaTest: QuizConfig = {
  id: 'maya-test',
  title: {
    ko: '나의 마야 영혼 동물 찾기',
    en: 'Find My Mayan Spirit Animal',
  },
  description: {
    ko: '고대 마야의 지혜가 알려주는 당신의 영혼 동물은 무엇일까요?',
    en: 'What is your spirit animal according to ancient Mayan wisdom?',
  },
  questions: [
    {
      id: 1,
      text: {
        ko: '깊은 숲속에서 길을 잃었습니다. 눈앞에 나타난 것은?',
        en: 'Lost in the deep forest. What appears in front of you?',
      },
      options: [
        { text: { ko: '반짝이는 호수', en: 'Shining Lake' }, value: 'JAGUAR' },
        { text: { ko: '높은 고목나무', en: 'Tall Old Tree' }, value: 'EAGLE' },
        { text: { ko: '신비로운 동굴', en: 'Mysterious Cave' }, value: 'SNAKE' },
      ],
    },
    {
      id: 2,
      text: {
        ko: '가장 끌리는 색깔은 무엇인가요?',
        en: 'Which color are you most drawn to?',
      },
      options: [
        { text: { ko: '열정적인 붉은색', en: 'Passionate Red' }, value: 'JAGUAR' },
        { text: { ko: '자유로운 하늘색', en: 'Free Sky Blue' }, value: 'EAGLE' },
        { text: { ko: '신중한 보라색', en: 'Prudent Purple' }, value: 'SNAKE' },
      ],
    },
    {
      id: 3,
      text: {
        ko: '친구들이 말하는 나의 평소 성격은?',
        en: 'How do friends describe your personality?',
      },
      options: [
        { text: { ko: '카리스마 있고 리더십이 있다', en: 'Charismatic and has leadership' }, value: 'JAGUAR' },
        { text: { ko: '통찰력 있고 큰 그림을 본다', en: 'Insightful and sees the big picture' }, value: 'EAGLE' },
        { text: { ko: '지혜롭고 적응력이 빠르다', en: 'Wise and adaptable' }, value: 'SNAKE' },
      ],
    },
    {
      id: 4,
      text: {
        ko: '주말에 하고 싶은 활동은?',
        en: 'What do you want to do on weekends?',
      },
      options: [
        { text: { ko: '활동적인 스포츠나 모험', en: 'Active sports or adventure' }, value: 'JAGUAR' },
        { text: { ko: '전망 좋은 곳에서 사색하기', en: 'Contemplating at a place with a view' }, value: 'EAGLE' },
        { text: { ko: '집에서 조용히 독서나 명상', en: 'Quiet reading or meditation at home' }, value: 'SNAKE' },
      ],
    },
    {
      id: 5,
      text: {
        ko: '중요한 결정을 내릴 때 나는?',
        en: 'When making important decisions...',
      },
      options: [
        { text: { ko: '직감을 믿고 빠르게 결정한다', en: 'Trust intuition and decide fast' }, value: 'JAGUAR' },
        { text: { ko: '멀리 내다보고 신중하게 결정한다', en: 'Look far ahead and decide carefully' }, value: 'EAGLE' },
        { text: { ko: '상황에 맞춰 유연하게 대처한다', en: 'Adapt flexibly to the situation' }, value: 'SNAKE' },
      ],
    },
  ],
  results: [
    {
      value: 'JAGUAR',
      title: {
        ko: '밤의 지배자, 재규어 (Jaguar)',
        en: 'Ruler of the Night, Jaguar',
      },
      description: {
        ko: '당신은 강한 직관과 리더십을 가진 재규어입니다. 어둠 속에서도 길을 찾는 능력이 탁월하며, 대담하고 자신감 넘치는 모습으로 주변을 이끕니다. 용기와 힘의 상징인 당신은 목표를 향해 거침없이 나아갑니다.',
        en: 'You are a Jaguar with strong intuition and leadership. Excellent at finding paths in the dark, you lead with boldness and confidence.',
      },
    },
    {
      value: 'EAGLE',
      title: {
        ko: '하늘의 감시자, 독수리 (Eagle)',
        en: 'Watcher of the Sky, Eagle',
      },
      description: {
        ko: '당신은 높은 곳에서 세상을 바라보는 독수리입니다. 뛰어난 통찰력과 지혜를 지녔으며, 사소한 것에 얽매이지 않고 큰 그림을 그릴 줄 압니다. 자유로운 영혼을 가진 당신은 이상을 향해 끊임없이 비상합니다.',
        en: 'You are an Eagle watching the world from above. With great insight and wisdom, you see the big picture. You fly constantly towards your ideals.',
      },
    },
    {
      value: 'SNAKE',
      title: {
        ko: '지혜의 수호자, 뱀 (Snake)',
        en: 'Guardian of Wisdom, Snake',
      },
      description: {
        ko: '당신은 땅의 기운을 타고난 지혜로운 뱀입니다. 뛰어난 적응력과 치유의 힘을 지녔으며, 변화의 흐름을 누구보다 빠르게 읽어냅니다. 신비로운 매력을 가진 당신은 조용하지만 강한 영향력을 발휘합니다.',
        en: 'You are a wise Snake. With great adaptability and healing power, you read the flow of change quickly. You exert strong influence quietly.',
      },
    },
  ],
};
