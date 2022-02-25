// export keyword 없으면 에러 발생
// 타입을 각각의 컴포넌트 마다 정의하는 것이 아니라
// 별도의 파일을 만들어서 관리할 수 있다

// Name 이라는 또 다른 타입으로 extract할 수 있다
// 이를 통해서 Name type도 다른 곳에서 사용할 수 있게된다
export type Name = {
  first: string;
  last: string;
};

export type PersonProps = {
  name: Name;
};

// export type PersonProps = {
//   name: {
//     first: string;
//     last: string;
//   };
// };
