import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex flex-col bg-fortnite-blue-900 p-6 gap-10">
      <ul className="flex flex-col md:flex-row md:justify-center gap-3">
        <li className="flex">
          <Link href="/" className="text-zinc-100 hover:text-slate-900 font-cursive 
          py-2 px-6 hover:bg-white hover:skew-y-1 w-full text-center">
            Sobre a empresa</Link>
        </li>
        <li className="flex">
          <Link href="/" className="text-zinc-100 hover:text-slate-900 font-cursive 
          py-2 px-6 hover:bg-white hover:-skew-y-1 w-full text-center">
            Termos e condições</Link>
        </li>
        <li className="flex">
          <Link href="/" className="text-zinc-100 hover:text-slate-900 font-cursive 
          py-2 px-6 hover:bg-white hover:skew-y-1 w-full text-center">
            Atendimento</Link>
        </li>
      </ul>
      <span className="text-sm text-center text-white">Fornite Miniature é uma empresa NÃO oficial Epic Games, não temos nenhuma relação comercial com a marca Fortnite.</span>
    </footer>
  )
}