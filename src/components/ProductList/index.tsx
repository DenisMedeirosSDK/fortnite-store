import { CardProducts } from "../Cards/Products"
import { Title } from "../Title"

interface Props {
  title: string
}

export function ProductList({ title }: Props) {
  return (
    <div className="md:px-24">
      <div className="flex justify-center md:block md:ml-10 mb-2">
        <Title title={title} />
      </div>
      {/* <div className='grid grid-cols-1 gap-y-20 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        <CardProducts name="REX" price={12900} slug="rex-passinho-dinamico" thumbnail="/Rex_Fortnite.png" rarity="common" />
        <CardProducts name="REX" price={12900} oldPrice={14900} slug="rex-passinho-dinamico" thumbnail="/Rex_Fortnite.png" rarity="uncommon" />
        <CardProducts name="REX" price={12900} slug="rex-passinho-dinamico" thumbnail="/Rex_Fortnite.png" rarity="rare" />
        <CardProducts name="REX" price={12900} slug="rex-passinho-dinamico" thumbnail="/Rex_Fortnite.png" rarity="epic" />
      </div> */}
      <div className="flex flex-row gap-5 overflow-x-auto px-5 md:px-0">
        <CardProducts name="REX" price={12900} slug="rex-passinho-dinamico" thumbnail="/Rex_Fortnite.png" rarity="common" />
        <CardProducts name="REX" price={12900} oldPrice={14900} slug="rex-passinho-dinamico" thumbnail="/Rex_Fortnite.png" rarity="uncommon" />
        <CardProducts name="REX" price={12900} slug="rex-passinho-dinamico" thumbnail="/Rex_Fortnite.png" rarity="rare" />
        <CardProducts name="REX" price={12900} slug="rex-passinho-dinamico" thumbnail="/Rex_Fortnite.png" rarity="epic" />
        <CardProducts name="REX" price={14900} oldPrice={29900} slug="rex-passinho-dinamico" thumbnail="/Rex_Fortnite.png" rarity="legendary" />
      </div>
    </div>
  )
}