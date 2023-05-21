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
      <section id="#home"className=" w-full h-screen flex justify-center items-center bg-[url('/img/bg.png')] bg-left bg-cover bg-dunes" >
        <div className="px-10 grid grid-cols-1 gap-4 place-content-center h-48 text-center rounded-xl backdrop-blur-sm bg-white/30 ">
          <div>
            <h1 className="text-6xl font-bold">Destiny‧Soul</h1>
          </div>
          <div>
            <h2 className="text-1xl font-bold">Destiny‧Soul工作室官方網站 !</h2>
          </div>
        </div>
      </section>
    </div> 
  )
}
