import clsx from "clsx"
import Image from "next/image"

interface Props {
  id?: string
  name: string
  slug: string
  price: number
  oldPrice?: number
  thumbnail: string
  rarity: "common" | "uncommon" | "rare" | "epic" | "legendary"
  images?: string[]
}

export function CardProducts({ id, name, slug, price, oldPrice, thumbnail, rarity = "common" }: Props) {

  function currencyFormatted(priceInCents: number) {
    return new Intl.NumberFormat('pt-BR', {
      currency: 'BRL',
      style: 'currency',
      minimumFractionDigits: 2
    }).format(priceInCents / 100)
  }

  return (
    <a href={`/produto/${slug}`} className="flex flex-col h-[550px] w-full min-w-[320px] max-w-xs bg-blue-300">
      <div className="flex flex-1 justify-center">
        <Image src={thumbnail} alt={name} className="h-96 w-auto object-contain" width={159} height={384} />
      </div>
      <div className={clsx("clip-l-20 pt-3", {
        "bg-gray-400": rarity === 'common',
        "bg-lime-400": rarity === 'uncommon',
        "bg-blue-600": rarity === 'rare',
        "bg-purple-600": rarity === 'epic',
        "bg-orange-500": rarity === 'legendary',
      })}>
        <div className="py-2 bg-zinc-800 text-center clip-l-15">
          <p className="font-cursive text-white text-xl uppercase">{name}</p>
        </div>
      </div>
      <div className="bg-zinc-900 h-8 text-right px-5 flex items-center justify-end">
        {oldPrice && <span className="font-cursive text-white mr-2 line-through opacity-50">{currencyFormatted(oldPrice)}</span>}
        <span className="font-cursive text-white">{currencyFormatted(price)}</span>
      </div>
    </a>
  )
}