interface Props {
  title: string
}

export function Title({ title }: Props) {
  return (
    <h2 className="font-cursive text-2xl sm:text-3xl uppercase text-white drop-shadow-[0px_0px_14px_rgba(255,255,255,0.5)]">
      {title}
    </h2>
  )
}