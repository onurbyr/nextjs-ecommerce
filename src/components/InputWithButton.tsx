import { InputHTMLAttributes } from "react";

interface InputWithButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  buttonTitle: string;
}

const InputWithButton = (props: InputWithButtonProps) => {
  return (
    <div>
      <input {...props} type="text" className="rounded-l-full px-6 py-2" />
      <button
        type="button"
        className="bg-main-red text-main-text rounded-r-full px-6 py-2"
      >
        {props.buttonTitle}
      </button>
    </div>
  );
};

export default InputWithButton;
