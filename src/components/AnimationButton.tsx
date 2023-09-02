import { ButtonHTMLAttributes } from "react";
import { IoMailOutline, IoCart } from "react-icons/io5";

interface InputWithButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonTitle: string;
}

const AnimationButton = (props: InputWithButtonProps) => {
  const { buttonTitle, ...rest } = props;
  return (
    <button
      type="button"
      className="bg-main-red text-main-text text-sm font-bold rounded-full px-6 py-2 hover:bg-white hover:text-main-red hover:outline hover:outline-2 flex items-center justify-center gap-2 group"
      {...rest}
    >
      <IoCart
        size="1.2rem"
        className="absolute opacity-0 group-hover:static group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-500"
      />
      {buttonTitle}
    </button>
  );
};

export default AnimationButton;
