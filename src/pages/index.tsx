import Head from "next/head";
import Navbar from "../components/navbar";
import TypewriterComponent from "typewriter-effect";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Destiny‧Soul</title>
        <meta name="description" content="Destiny‧Soul工作室官方網站 !" />
      </Head>
      <Navbar />
      <section
        id="#title"
        className="w-full h-screen flex place-content-center items-center bg-[url('/resources/img/bg.png')] bg-left bg-cover bg-dunes"
      >
        <div className="px-10 py-2 grid grid-cols-1 gap-4 h-48 text-center rounded-xl backdrop-blur-sm bg-white/30">
          <div>
            <h1 className="text-6xl font-bold">Destiny‧Soul</h1>
          </div>
          <div className="font-bold text">
            <TypewriterComponent
              options={{
                autoStart: true,
                loop: true,
                delay: 75,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("歡迎來到 Destiny‧Soul 官方網站")
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
              }}
            />
          </div>
          <div>
            <button className="text-black border-rose-50 rounded-full">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
