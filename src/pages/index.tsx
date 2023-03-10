import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ProductList } from '@/components/ProductList'
import { GetProductsQuery, useGetProductsQuery } from '@/graphql/generate'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {
  const [products, setProducts] = useState<GetProductsQuery>({} as GetProductsQuery)

  const { data } = useGetProductsQuery()

  useEffect(() => {
    async function loadProduct() {
      if (data) {
        setProducts(data)
      }
    }

    loadProduct()
  }, [data, products])
  return (
    <>
      <Head>
        <title>Fortnite Store</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-blue-800 flex-1 pb-20">
        <Header />
        {/* <p className="font-cursive text-3xl text-white my-20 text-center">Fortnite Store</p> */}

        <div className='flex flex-col gap-10 mt-20'>
          <ProductList title='Mais procurados' data={products} />
          {/* <ProductList title='Em destaque' /> */}
        </div>
      </main>
      <Footer />
    </>
  )
}
