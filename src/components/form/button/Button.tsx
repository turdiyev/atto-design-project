import React from "react";
import { ReactComponent as Loader } from "assets/Loader.svg";

export default function Button({
  children,
  className = "",
  loader = false,
  size = "normal",
  variant = "primary",
  ...rest
}: Props) {
  return (
    <button
      className={[
        Variants[variant] || "",
        " ",
        Sizes[size] || "",
        ` active:text-white
        disabled:opacity-50 disabled:cursor-not-allowed
        py-2.5 px-8 font-bold text-lg
      text-white hover:text-white/80
        focus:outline-none `,
        className || "",
      ].join('')}
      {...rest}
    >
      {loader && (
        <Loader className="mr-2 fill-white/50 inline-block align-middle w-5 h-5 text-white/60 animate-spin" />
      )}
      {children}
    </button>
  );
}

type SizeType = "small" | "medium" | "large" | "normal";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children?: React.ReactNode;
  className?: React.ReactNode;
  loader?: boolean;
  size?: SizeType;
  variant?: "secondary" | "primary" | "text" | "default";
};

const Sizes = {
  small: "scale-75",
  normal: "",
  medium: "scale-125",
  large: "scale-150",
};
const ButtonStyle = `active:shadow-inner rounded-lg shadow-md hover:shadow-xl focus:ring-1 focus:ring-offset-10 focus:ring-indigo-500`;
const Variants = {
  primary: `bg-primary ${ButtonStyle}`,
  default: "",
  secondary: `bg-secondary ${ButtonStyle}`,
  text: "scale-150 !text-black",
};
