import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

export function ButtonPrimary({ title, ...rest }: Props) {
  return (
    <button
      className="h-16 px-9 font-cursive w-full uppercase 
    text-zinc-900 bg-fortnite-yellow hover:bg-white hover:text-slate-900 transition-colors"
      {...rest}
    >
      {title}
    </button>
  )
}