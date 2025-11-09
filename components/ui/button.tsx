import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export function Button({ className = "", children, ...props }: ButtonProps) {
  return (
    <button
      className={
        "inline-flex items-center justify-center rounded-xl px-4 py-2 " +
        "text-sm font-medium " +
        "transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 " +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
}