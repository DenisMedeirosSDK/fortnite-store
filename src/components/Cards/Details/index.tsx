import { GetProductBySlugQuery } from "@/graphql/generate";
import { useEffect, useState } from "react";
import { CardFooter } from "./Footer";
import { CardHeader } from "./Header";

interface Props {
  props: GetProductBySlugQuery | undefined
}

export function CardDetails({ props }: Props) {

  const [description, setDescription] = useState('')


  useEffect(() => {

    if (props?.productID?.description.markdown) {
      setDescription(props?.productID?.description.markdown)
    }
  }, [props?.productID?.description.markdown])

  return (
    <div className="flex flex-col xl:max-w-[640px] xl:w-full">
      <CardHeader name={props?.productID?.title} category={props?.productID?.category} rarity={props?.productID?.rarity} />
      <div className="p-4 flex flex-col justify-center bg-fortnite-blue-700 max-h-[460px] min-h-[460px]">
        <div className="flex flex-1">
          <p className="font-semibold text-white">
            {/* <ReactMarkdown > */}
            {description}
            {/* </ReactMarkdown> */}
          </p>
        </div>
        {/* <img src="/Rex_Fortnite.png" alt="" className="h-80 object-contain" /> */}
        <div className="overflow-x-auto flex flex-row gap-3 justify-center">
          <button className="h-36 w-28 bg-fortnite-blue-300 flex justify-center items-center">
            <img src="/Rex_Fortnite.png" alt="" className="h-24 object-contain" />
          </button>
          <button className="h-36 w-28 bg-fortnite-blue-300 flex justify-center items-center">
            <img src="/Rex_Fortnite.png" alt="" className="h-24 object-contain" />
          </button>
          <button className="h-36 w-28 bg-fortnite-blue-300 flex justify-center items-center">
            <img src="/Rex_Fortnite.png" alt="" className="h-24 object-contain" />
          </button>
          <button className="h-36 w-28 bg-fortnite-blue-300 flex justify-center items-center">
            <img src="/Rex_Fortnite.png" alt="" className="h-24 object-contain" />
          </button>
        </div>
      </div>
      <CardFooter price={props?.productID?.price} oldPrice={props?.productID?.oldPrice} />
      {/* <CardDescription /> */}
    </div>
  )
}