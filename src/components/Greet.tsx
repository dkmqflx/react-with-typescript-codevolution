type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

// 그냥 props 만 적으면 에러
// {name: stirng} 형태가 넘어오기 때문에
// props:string이 앙니라, 위처럼 타입을 정의해주어야 한다.

export function Greet(props: GreetProps) {
  const { messageCount = 0 } = props;
  return (
    <div>
      {props.isLoggedIn
        ? ` This ${props.name} is Greet ${messageCount}
      state is`
        : 'not loggged'}
    </div>
  );
}
