import { CardFooter } from "./Footer";
import { CardHeader } from "./Header";

export function CardDetails() {
  return (
    <div className="flex flex-col xl:max-w-[640px] xl:w-full">
      <CardHeader />
      <div className="p-4 flex flex-col justify-center bg-fortnite-blue-700 max-h-[460px] min-h-[460px]">
        <div className="flex flex-1">
          <p className="font-semibold text-white">Miniatura Rex na posição do emote passinho dinâmico.
            Altura de 15cm - Escala 1/10
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
      <CardFooter price={14900} oldPrice={25000} />
      {/* <CardDescription /> */}
    </div>
  )
}