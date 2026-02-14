const games = [
  { away: "LAL", awayScore: 112, home: "BOS", homeScore: 105, status: "FINAL" },
  { away: "GSW", awayScore: 98, home: "MIA", homeScore: 102, status: "FINAL" },
  { away: "PHX", awayScore: 118, home: "NYK", homeScore: 121, status: "4th 2:14" },
  { away: "DEN", awayScore: 95, home: "MIL", homeScore: 88, status: "3rd 8:30" },
  { away: "DAL", awayScore: 107, home: "PHI", homeScore: 103, status: "FINAL" },
  { away: "MEM", awayScore: 99, home: "CLE", homeScore: 104, status: "FINAL" },
  { away: "SAC", awayScore: 110, home: "CHI", homeScore: 108, status: "OT 1:45" },
  { away: "OKC", awayScore: 115, home: "MIN", homeScore: 112, status: "FINAL" },
];

const GameCard = ({ away, awayScore, home, homeScore, status }: typeof games[0]) => {
  const isLive = !status.includes("FINAL");
  return (
    <div className="flex-shrink-0 bg-secondary rounded-md px-4 py-2 min-w-[180px] border border-border hover:border-nba-blue/40 transition-colors cursor-pointer">
      <div className="flex justify-between items-center text-xs mb-1">
        <span className={isLive ? "text-nba-red font-bold animate-pulse" : "text-muted-foreground"}>{status}</span>
      </div>
      <div className="flex justify-between items-center text-sm font-bold">
        <span>{away}</span>
        <span className="text-nba-gold">{awayScore}</span>
      </div>
      <div className="flex justify-between items-center text-sm font-bold">
        <span>{home}</span>
        <span className="text-nba-gold">{homeScore}</span>
      </div>
    </div>
  );
};

const LiveScoresTicker = () => (
  <div className="bg-surface-dark border-b border-border overflow-hidden">
    <div className="flex items-center">
      <div className="flex-shrink-0 bg-nba-red px-3 py-3 text-xs font-bold uppercase tracking-wider text-accent-foreground z-10">
        Live
      </div>
      <div className="overflow-hidden flex-1">
        <div className="animate-ticker flex gap-3 py-2 px-3" style={{ width: "max-content" }}>
          {[...games, ...games].map((game, i) => (
            <GameCard key={i} {...game} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default LiveScoresTicker;
