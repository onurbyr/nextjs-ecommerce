import { ButtonHTMLAttributes } from "react";

interface InputWithButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonTitle: string;
}

const Button = (props: InputWithButtonProps) => {
  const { buttonTitle, ...rest } = props;
  return (
    <button
      type="button"
      {...rest}
      className={`bg-main-red text-main-text text-sm font-bold rounded-full px-6 py-2 hover:bg-white hover:text-main-red hover:outline hover:outline-2 flex items-center justify-center gap-2 ${props.className}`}
    >
      {buttonTitle}
    </button>
  );
};

export default Button;
