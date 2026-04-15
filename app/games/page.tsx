import Navbar from "@/layout/navbar";
import GamePage from "@/app/views/game/main_card";

export default function GamesPage() {
  return (
    <main className="relative min-h-screen bg-[#011425]">
      <Navbar />
      <GamePage />
    </main>
  );
}
