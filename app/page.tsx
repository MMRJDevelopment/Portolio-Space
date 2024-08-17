import Hero from "./components/Hero";
import Navber from "./components/Navber";
import Skills from "./components/Skills";


export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="flex flex-col gap-20 ">
        <Hero/>
        <Skills/>
        <Navber/>
      </div>
    </main>
  );
}
