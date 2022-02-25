import { Login } from './Login';
import { ProfileProps } from './Profile';

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
  //ProfileProps type을 가진 컴포넌트이다
  // 어떤 컴포넌트라도 올 수 있는 경우에는 React.ComponentType
};

export function Private({ isLoggedIn, component: Component }: PrivateProps) {
  if (isLoggedIn) {
    return <Component name="name!"></Component>;
  } else {
    return <Login></Login>;
  }
}
