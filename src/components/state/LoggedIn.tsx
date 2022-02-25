import { useState } from 'react';

export function LoggedIn() {
  const [isLogged, setIsLogged] = useState(false); // type inference 적용되서 boolean으로 처리한다

  const handleLogin = () => {
    setIsLogged(true);
  };
  const handleLoout = () => {
    setIsLogged(false);
    // setIsLogged(0); -> 에러 발생
    // type inference 때문
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLoout}>Logout</button>
      <div>User ig {isLogged ? 'logged in' : 'logged out'}</div>
    </div>
  );
}
