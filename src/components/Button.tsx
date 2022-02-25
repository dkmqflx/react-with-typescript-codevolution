import React from 'react';

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  //<HTMLButtonElement>는 없어도 된다.
};

export function Button(props: ButtonProps) {
  return <button onClick={(event) => props.handleClick(event, 1)}>Click</button>;
}
