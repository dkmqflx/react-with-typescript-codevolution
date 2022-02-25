import { useRef, useEffect } from 'react';

export default function DomRef() {
  const inputRef = useRef<HTMLInputElement>(null!); // never null

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}
