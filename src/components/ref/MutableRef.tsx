import { useRef, useEffect, useState } from 'react';

export function MutableRef() {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef<number | null>(null); // 1인 경우 타이머 작동

  const stopTimer = () => {
    if (interValRef.current) {
      window.clearInterval(interValRef.current);
    }
  };

  useEffect(() => {
    if (interValRef.current) {
      interValRef.current = window.setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    }

    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      Timer - {timer}
      <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  );
}
