import Head from "next/head"
import Navbar from "../components/navbar"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Destiny‧Soul</title>
        <meta name="description" content="Destiny‧Soul工作室官方網站 !"/>
      </Head>
      <Navbar></Navbar>
      <section id="#home"className="bg-[url('/img/bg.png')] w-full h-screen bg-left bg-cover bg-dunes" >
        <div className="px-2 py-5">
          hi
        </div>
      </section>
      <section id="#home"className="bg-white w-full h-screen bg-left bg-cover bg-dunes" >
        <div className="px-2 py-5">
          hi
        </div>
      </section>
    </div> 
  )
}
