import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Burger } from "./Burger";

interface Menu {
  name: string
  path: string
}

const MENU: Menu[] = [
  {
    name: 'HOME',
    path: '/'
  },
  {
    name: 'LOJA DE ITENS',
    path: '/store'
  },
  {
    name: 'EM BREVE',
    path: '/coming'
  },
  {
    name: 'CARRINHO',
    path: '/cart'
  },
  {
    name: 'VESTIÁRIO',
    path: '/cart'
  },
  // {
  //   name: 'CADASTRAR-SE',
  //   path: '/register'
  // },
]

export function Header() {

  const { data: session } = useSession()


  return (
    <nav className="h-24 flex items-center px-6 w-full bg-fortnite-blue-900">
      <div className="md:hidden flex items-center justify-between w-full">
        <Burger />
        <Link href="/" className="font-cursive text-xl text-white">Fortnite Store</Link>
      </div>
      <div className="md:flex md:flex-row md:items-center md:gap-3 w-full justify-center hidden">
        {MENU.map(item => {
          return (
            <Link
              key={item.name}
              href={item.path}
              className="hover:bg-white hover:text-slate-900 hover:transform hover:skew-y-1 p-2 hover:transition-all text-white font-cursive text-base uppercase">
              {item.name}
            </Link>
          )
        })}

        {session ? (
          <button onClick={() => signOut()} className="hover:bg-white hover:text-slate-900 hover:transform hover:skew-y-1 p-2 hover:transition-all text-white font-cursive text-base uppercase">
            Sair
          </button>
        ) : (

          <button
            className="hover:bg-white hover:text-slate-900 hover:transform hover:skew-y-1 p-2 hover:transition-all text-white font-cursive text-base uppercase"
            onClick={() => signIn('discord')}
          >
            Entrar
          </button>
        )}
      </div>
    </nav>
  )
}