import { InputHTMLAttributes } from "react";

interface InputWithButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  buttonTitle: string;
}

const InputWithButton = (props: InputWithButtonProps) => {
  const { buttonTitle, ...rest } = props;
  return (
    <div>
      <input {...rest} type="text" className="rounded-l-full px-6 py-2" />
      <button
        type="button"
        className="bg-main-red text-main-text rounded-r-full px-6 py-2"
      >
        {buttonTitle}
      </button>
    </div>
  );
};

export default InputWithButton;
