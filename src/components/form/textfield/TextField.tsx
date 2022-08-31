import React from 'react';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { placeholder?: string; className?: string };

export default function TextField({ className = '', ...props }: Props): JSX.Element {
  return (
    <div className="relative">
      <input
        {...props}
        className={`peer appearance-none font-semibold z-10 placeholder-gray-100
        placeholder-opacity-0 block w-full px-4 h-[48px] py-8 pb-6 border border-none 
        dark:bg-black/20 autofill:bg-black 
        rounded-md focus:outline-none focus:ring-indigo-500 focus:outline-green-500
        focus:outline-primary focus:outline-1 focus:z-10 sm:text-sm 
        dark:text-white
        ${className}`}
      />
      <label className="text-black/60 font-semibold peer-placeholder-shown:text-base text-xs
      peer-focus:text-xs peer-placeholder-shown:translate-y-1  
      translate-y-2 peer-focus:-translate-y-1.5 
      peer-placeholder-shown:translate-x-0
      dark:text-white/60 
      z-10
      absolute top-3 left-4 transition-all">
        {/* {props.placeholder} */}
        Placeholder
      </label>
    </div>
  );
}
