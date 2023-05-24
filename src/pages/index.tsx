import Head from "next/head"
import Navbar from "../components/navbar"
import TypewriterComponent from "typewriter-effect"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Destiny‧Soul</title>
        <meta name="description" content="Destiny‧Soul工作室官方網站 !"/>
      </Head>
      <Navbar></Navbar>
      <section id="#title"className="w-full h-screen flex justify-center items-center bg-[url('/resources/img/bg.png')] bg-left bg-cover bg-dunes" >
        <div className="px-10 grid grid-cols-1 gap-4 place-content-center h-48 text-center rounded-xl backdrop-blur-sm bg-white/30">
          <div>
            <h1 className="text-6xl font-bold">Destiny‧Soul</h1>
          </div>
          <div className="font-bold text">
            <TypewriterComponent  options={{
              autoStart: true,
              loop: true,
              delay:75
              }} onInit={(typewriter) => {
              typewriter.typeString("歡迎來到 Destiny‧Soul 官方網站")
              .pauseFor(100)
              .typeString(" !")
              .pauseFor(100)
              .typeString(" !")
              .pauseFor(100)
              .typeString(" ?")
              .pauseFor(2500)
              .deleteAll()
              .typeString("您可以在此獲取 Destiny‧Soul 的最新作品 !")
              .pauseFor(2500)
              .deleteAll()
              .start();
            }}/>
          </div>
        </div>
      </section>
    </div> 
  )
}
