import Header from "@/components/Header";
import LiveScoresTicker from "@/components/LiveScoresTicker";
import HeroSection from "@/components/HeroSection";
import NewsGrid from "@/components/NewsGrid";
import Standings from "@/components/Standings";
import PlayerSpotlight from "@/components/PlayerSpotlight";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <LiveScoresTicker />
    <HeroSection />

    <section className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <NewsGrid />
        </div>
        <div>
          <Standings />
        </div>
      </div>
    </section>

    <PlayerSpotlight />
    <Footer />
  </div>
);

export default Index;
