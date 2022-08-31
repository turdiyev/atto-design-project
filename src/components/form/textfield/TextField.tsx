import React from 'react';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { placeholder?: string; className?: string };

export default function TextField({ className = '', ...props }: Props): JSX.Element {
  return (
    <div className="relative">
      <input
        id='input'
        {...props}
        className={`peer appearance-none font-semibold z-10 placeholder-gray-100 placeholder-opacity-0 block w-full px-4 h-[48px] py-8 pb-6 border border-none dark:bg-black/20 autofill:bg-black 
        rounded-md focus:outline-none focus:ring-indigo-500 focus:outline-green-500 focus:outline-primary focus:outline-1 focus:z-10 sm:text-sm 
        dark:text-white 
        placeholder-transparent
        ${className}`}
        placeholder="need to be here"
      />
      <label htmlFor='input' className="dark:text-white/60 text-black/60 
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
