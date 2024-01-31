import * as React from "react";
import classNames from "classnames";

type ButtonProps = {
  children?: React.ReactNode
  className?: string
}

export default function Button({ children, className }: ButtonProps) {
  const cn = classNames("border-2 border-black p-1 px-6 rounded-full font-bold",
    className);
  return (
    <button className={cn} type="button">
      {children}
    </button>
  )
}

