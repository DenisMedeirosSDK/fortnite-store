import { CardDetails } from "@/components/Cards/Details";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useGetProductBySlugQuery } from "@/graphql/generate";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


interface ProductDetailsProps {

}

export default function ProductDetails({ }: ProductDetailsProps) {
  const [asideView, setAsideView] = useState(false)

  const router = useRouter()
  const { slug } = router.query

  console.log(slug)
  const { data } = useGetProductBySlugQuery({
    variables: {
      slug: slug as string
    }
  })
  console.log(data)

  useEffect(() => {
    async function handleResize() {
      if (window.innerWidth >= 1280) {
        console.log(window.innerWidth)
        setAsideView(true)
      }
    }
    handleResize()
  }, [])

  return (
    <div className="flex flex-col w-full h-full min-h-screen bg-blue-800 text-white text-base">
      <Header />
      <main className="flex flex-col xl:flex-row min-h-screen h-full lg:px-36 mt-10">
        <CardDetails props={data} />

        {asideView && (
          <div className=" w-full flex justify-center items-start max-h-[740px]">
            <img src="/Rex_Fortnite.png" alt="" className="object-contain h-full" />
          </div>
        )}
      </main>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  )
}