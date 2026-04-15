import Navbar from "@/layout/navbar";
import LeaderboardPage from "@/app/views/leaderboard";

export default function LeaderboardRoutePage() {
  return (
    <main className="relative min-h-screen bg-[#011425]">
      <Navbar />
      <LeaderboardPage />
    </main>
  );
}
