import Navbar from "@/layout/navbar";
import Hero from "@/app/views/home/hero";
import PopularGame from "@/app/views/home/popular_game";
import PopularTournaments from "@/app/views/home/popular_tournaments";
import InviteAndEarn from "@/app/views/home/invite_and_earn";
import PopularSpaces from "@/app/views/home/popular_spaces";
import MarketPlace from "@/app/views/home/market_place";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#011425]">
      <Navbar />
      <Hero />
      <PopularGame />
      <PopularTournaments />
      <InviteAndEarn />
      <PopularSpaces />
      <MarketPlace />
    </main>
  );
}
