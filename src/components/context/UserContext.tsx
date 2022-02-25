import { useState, createContext } from 'react';

export type AuthUser = {
  name: string;
  email: string;
};

type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext({} as UserContextType);
// 이렇게 처리해주지 않으면 value={{user, setUser}} 부분에서 에러가 발생한다
// type inference를 통해 null로 type이 정해지기 때문에 value에서 null 이외의 값을 전달할 수 없다

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
