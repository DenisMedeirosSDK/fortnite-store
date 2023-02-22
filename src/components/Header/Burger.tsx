export function Burger() {
  return (
    <button className="w-14 h-12 border-4 flex flex-col justify-evenly items-center border-fortnite-blue-300 group transition-all">
      <div className="h-[6px] bg-fortnite-blue-100 group-hover:bg-white skew-y-[2deg] w-8" />
      <div className="h-[6px] bg-fortnite-blue-100 group-hover:bg-white skew-y-[-1deg] w-8" />
      <div className="h-[6px] bg-fortnite-blue-100 group-hover:bg-white skew-y-[2deg] w-8" />
    </button>
  )
}