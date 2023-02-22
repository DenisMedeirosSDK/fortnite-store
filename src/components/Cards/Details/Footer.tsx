import { currencyFormatted } from "@/utils/currencyFormatted";
import { ButtonPrimary } from "../../Buttons/ButtonPrimary";

interface Props {
  price: number
  oldPrice?: number
}

export function CardFooter({ oldPrice, price }: Props) {
  return (
    <div className="py-4 bg-fortnite-blue-900 text-center flex flex-col gap-4 items-center">
      <span className="text-sm text-white font-cursive">O preço desse item é:</span>
      <div className="flex flex-row items-center gap-4">
        <p className="text-3xl text-white font-cursive">{currencyFormatted(price)}</p>
        {oldPrice && <span className="font-cursive text-white mr-2 line-through opacity-50">{currencyFormatted(oldPrice)}</span>}
      </div>
      <div className="w-full px-6 xl:max-w-[420px]">
        <ButtonPrimary title="adicionar ao carrinho" />
      </div>
    </div>
  )
}