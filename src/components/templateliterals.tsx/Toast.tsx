/*

Position props can be one of
"left-center" | "left-top" | "left-bottom" | "center" | "center-top"|
"center-bottom" | "right-center" | "right-top" | "right-bottom"
 */

type HorizontalPosition = 'left' | 'center' | 'right';
type VerticalPosition = 'top' | 'center' | 'bottom';

type ToastProps = {
  position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center';
};

//center-center 반복되는 것 보다 center 하나로 쓰기 위해 Exclude 사용

export const Toast = ({ position }: ToastProps) => {
  return <div>Toast - {position}</div>;
};
