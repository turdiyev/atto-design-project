import React from 'react';

export default function TextField({ className = '', mode = "filled", type = "default", ...props }: Props): JSX.Element {
  return (
    <div className="relative">
      <input
        id='input'
        {...props}
        className={`
        peer appearance-none font-semibold z-10 placeholder-gray-100 
        placeholder-opacity-0 block w-full px-4 h-[48px] py-8 pb-6
        rounded-md focus:outline-none
        focus:ring-indigo-500
        focus:outline-green-500 focus:outline-primary focus:outline-1 focus:z-10 sm:text-sm 
        placeholder-transparent
        ${Modes[mode] || ""}
        ${Types[type] || ""}
        ${className}`}
        placeholder="..."
      />
      <label htmlFor='input' className="
      text-gray-400
      font-semibold
      text-xs
      peer-focus:text-xs
      peer-placeholder-shown:text-base 
      peer-placeholder-shown:translate-y-1 
      peer-focus:-translate-y-1.5
      peer-placeholder-shown:translate-x-0
      -translate-y-1.5
      absolute top-3 left-4 
      transition-all">
        {props.placeholder}
        Label
      </label>
    </div>
  );
}


type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  placeholder?: string; className?: string,
  type?: "error" | "valid" | "default";
  mode?: "filled" | "outlined" | "standard";
};


const Types = {
  error: "outline !outline-1 !outline-red-500 !outline-error",
  valid: "outline !outline-1 !outline-green-500 !outline-primary",
  default: ""
};

const Modes = {
  filled: "bg-black/20 text-white autofill:bg-black border-none dark:text-white ",
  outlined: "bg-transparent border border-1 border-gray-500 text-white",
  standard: "bg-transparent !focus:outline-none !outline-none border-b text-white  rounded-none "
};
