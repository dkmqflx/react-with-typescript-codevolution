import { useContext } from 'react';
import { UserContext } from './UserContext';

export function User() {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    userContext.setUser({
      name: 'name!',
      email: 'email!',
    });
  };

  const handleLoout = () => {
    userContext.setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLoout}>Logout</button>
      <div>User name {userContext.user?.name}</div>
      <div>User email{userContext.user?.email} </div>
    </div>
  );
}
