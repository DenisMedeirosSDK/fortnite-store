interface Props {
  name: string | undefined | null
  rarity: string | undefined | null
  category: string | undefined | null
}

export function CardHeader({ name, category, rarity }: Props) {
  return (
    <div className="w-full h-24 bg-fortnite-blue-300 inline-block px-6 py-4">
      <span className="text-zinc-100 opacity-70 text-sm font-semibold uppercase">{rarity} | {category}</span>
      <p className="text-3xl drop-shadow-[0px_0px_14px_rgba(255,255,255,0.5)] font-cursive">{name}</p>
    </div>
  )
}