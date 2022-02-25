type RandomNumberType = {
  value: number;
};

// never 타입을 지정한 변수에 never가 아닌 타입은 할당할 수 없다

type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeNumber = RandomNumberType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};

type ZeroNumber = RandomNumberType & {
  isZero: boolean;
  isPositive?: never;
  isNegative?: never;
};

type RandomNumberProps = PositiveNumber | NegativeNumber | ZeroNumber;

const RandomNumber = ({ value, isPositive, isNegative, isZero }: RandomNumberProps) => {
  return (
    <div>
      <div>{value}</div>
      <div>{isPositive && 'isPositive'}</div>

      <div>{isNegative && 'isNegative'}</div>

      <div>{isZero && 'zero'}</div>
    </div>
  );
};

export default RandomNumber;
