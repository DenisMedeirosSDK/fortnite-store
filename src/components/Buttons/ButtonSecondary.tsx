import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

export function ButtonSecondary({ title, ...rest }: Props) {

  function test() {
    console.log('asdasdasda')
  }
  return (
    <button onClick={test} className="h-16 w-full bg-fortnite-blue-300 p-2 hover:bg-transparent hover:border-inherit hover:border-4 hover:rounded-md group"  {...rest}>
      <div
        className="flex justify-center items-center bg-fortnite-blue-500 uppercase text-zinc-100 w-full h-full font-cursive skew-y-[0.1deg] 
      group-hover:bg-zinc-100 group-hover:text-slate-900 group-hover:transition-all"
      >
        {title}
      </div>
    </button>
  )
}