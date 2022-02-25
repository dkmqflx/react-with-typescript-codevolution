type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Input(props: InputProps) {
  /*
  
  컴포넌트 내에서도 아래처럼 change handler를 등록할 수 있다 
  const handleInputChange = (  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;) => 
  {
    console.log(event)
  }

  */

  return <input type="text" value={props.value} onChange={props.handleChange} />;
}
