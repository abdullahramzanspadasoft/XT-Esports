import Navbar from "../layout/Navbar";
import Hero from "./views/home/Hero";
import PopularGame from "./views/home/PopularGame/PopularGame";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />

      <PopularGame />
    </main>
  );
}
