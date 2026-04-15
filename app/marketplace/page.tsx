import Navbar from "@/layout/navbar";
import MarketplacePage from "@/app/views/marketplace";

export default function MarketplaceRoutePage() {
  return (
    <main className="relative min-h-screen bg-[#011425]">
      <Navbar />
      <MarketplacePage />
    </main>
  );
}
