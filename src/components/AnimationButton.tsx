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
      className="bg-main-red text-main-text text-sm font-bold rounded-full px-3 py-2 hover:bg-white hover:text-main-red hover:outline hover:outline-2 flex items-center justify-center gap-1 group/button"
      {...rest}
    >
      <IoCart
        size="1rem"
        className="absolute opacity-0 group-hover/button:static group-hover/button:opacity-100 group-hover/button:transition-opacity group-hover/button:duration-500"
      />
      <div className="text-xs md:text-sm">{buttonTitle}</div>
    </button>
  );
};

export default AnimationButton;
