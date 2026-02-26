import Navbar from "../layout/navbar";
import Hero from "./views/home/hero";
import PopularGame from "./views/home/popular_game";
import PopularTournaments from "./views/home/popular_tournaments";
import InviteAndEarn from "./views/home/invite_and_earn";
import PopularSpaces from "./views/home/popular_spaces";
import MarketPlace from "./views/home/market_place";
import XtEsportsBanner from "../layout/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />

      <PopularGame />
      <PopularTournaments />
      <InviteAndEarn />
      <PopularSpaces />
      <MarketPlace />
      <XtEsportsBanner />
    </main>
  );
}
