'use client';

import { useState } from 'react';
import { QuizCard } from './QuizCard';
import { OptionButton } from './OptionButton';

export function QuizDemo() {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelected(option);
    console.log('Selected:', option);
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 w-full">
      <QuizCard question="주말 오후, 갑작스럽게 약속이 취소되었다. 당신의 반응은?">
        <OptionButton
          text="오예! 집에서 넷플릭스 보면서 뒹굴거려야지."
          onClick={() => handleSelect('A')}
          selected={selected === 'A'}
        />
        <OptionButton
          text="아쉬운데... 다른 친구에게 연락해볼까?"
          onClick={() => handleSelect('B')}
          selected={selected === 'B'}
        />
        <OptionButton
          text="혼자서라도 나가서 카페 가서 책 읽어야지."
          onClick={() => handleSelect('C')}
          selected={selected === 'C'}
        />
      </QuizCard>
    </div>
  );
}
