import heroImage from "@/assets/hero-basketball.jpg";

const HeroSection = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImage} alt="NBA Championship action" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
    </div>

    <div className="relative container mx-auto px-4 py-20 md:py-32 min-h-[420px] flex flex-col justify-end">
      <span className="inline-block bg-nba-red text-accent-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded mb-4 w-fit">
        Breaking News
      </span>
      <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-black leading-tight max-w-2xl mb-4">
        Championship Race Heats Up as Playoffs Approach
      </h1>
      <p className="text-muted-foreground text-base md:text-lg max-w-xl mb-6">
        With just weeks remaining in the regular season, the battle for playoff positioning intensifies across both conferences.
      </p>
      <button className="bg-nba-blue hover:bg-primary/80 text-primary-foreground font-bold px-6 py-3 rounded-md w-fit transition-colors text-sm uppercase tracking-wider">
        Read Full Story
      </button>
    </div>
  </section>
);

export default HeroSection;
