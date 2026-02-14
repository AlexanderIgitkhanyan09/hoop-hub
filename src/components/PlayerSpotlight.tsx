import playerImage from "@/assets/player-spotlight.jpg";

const stats = [
  { label: "PPG", value: "32.4" },
  { label: "RPG", value: "8.7" },
  { label: "APG", value: "6.2" },
  { label: "FG%", value: ".521" },
];

const PlayerSpotlight = () => (
  <section className="container mx-auto px-4 py-12">
    <h2 className="font-display text-2xl font-black uppercase tracking-tight mb-6">
      <span className="text-nba-gold">★</span> Player Spotlight
    </h2>
    <div className="bg-card rounded-lg border border-border overflow-hidden md:flex">
      <div className="md:w-1/3 relative">
        <img src={playerImage} alt="Featured player" className="w-full h-64 md:h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-card" />
      </div>
      <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
        <span className="text-xs font-bold uppercase tracking-wider text-nba-red mb-2">MVP Candidate</span>
        <h3 className="font-display text-3xl font-black mb-1">Marcus Thompson</h3>
        <p className="text-muted-foreground text-sm mb-6">Guard · Season 2025-26</p>

        <div className="grid grid-cols-4 gap-4 mb-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center bg-secondary rounded-md py-3">
              <div className="text-2xl font-black text-nba-gold font-display">{s.value}</div>
              <div className="text-xs text-muted-foreground font-bold uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
          Thompson is putting together one of the most dominant individual seasons in recent memory,
          leading the league in scoring while maintaining elite efficiency. His combination of
          shot-creating ability, court vision, and defensive intensity has him firmly in the MVP conversation.
        </p>
      </div>
    </div>
  </section>
);

export default PlayerSpotlight;
