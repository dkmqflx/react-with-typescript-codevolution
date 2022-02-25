import { useState } from 'react';

type AuthUser = {
  name: string;
  email: string;
};
export function User() {
  const [user, setUser] = useState<AuthUser | null>(null);

  /*

 //다음과 같이 null이 될 경우가 없을 때는 type assertion을 사용할 수 있다
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  그리고 option chaining도 필요 없게 된다 
  
  <div>User name {user.name} </div>
  <div>User email {user.email} </div>

 */
  const handleLogin = () => {
    setUser({
      name: 'Name is ',
      email: 'Email',
    });
  };
  const handleLoout = () => {
    setUser(null);
    // setIsLogged(0); -> 에러 발생
    // type inference 때문
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLoout}>Logout</button>
      <div>User name {user?.name} </div>
      <div>User email {user?.email} </div>
    </div>
  );
}
