import Navbar from "@/layout/navbar";
import TournamentPage from "@/app/views/tournament/tournament-page";

export default function TournamentsPage() {
  return (
    <main className="relative min-h-screen bg-[#011425]">
      <Navbar />
      <TournamentPage />
    </main>
  );
}
