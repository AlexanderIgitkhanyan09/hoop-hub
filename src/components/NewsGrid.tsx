const newsItems = [
  {
    category: "Trade Rumors",
    title: "Star Guard Linked to Multiple Contenders Ahead of Deadline",
    date: "Feb 14, 2026",
    excerpt: "Multiple sources report that several championship-caliber teams are making aggressive offers.",
  },
  {
    category: "Injury Report",
    title: "All-Star Forward Expected to Return Within Two Weeks",
    date: "Feb 13, 2026",
    excerpt: "The team's medical staff has cleared the star for full-contact practice sessions.",
  },
  {
    category: "Analysis",
    title: "Rookie of the Year Race: A Statistical Deep Dive",
    date: "Feb 12, 2026",
    excerpt: "Breaking down the numbers behind this season's most impressive first-year players.",
  },
  {
    category: "Highlights",
    title: "Top 10 Plays of the Week Feature Incredible Dunks",
    date: "Feb 11, 2026",
    excerpt: "From coast-to-coast slams to game-winning buzzer-beaters, this week delivered.",
  },
];

const NewsGrid = () => (
  <div className="space-y-4">
    <h2 className="font-display text-2xl font-black uppercase tracking-tight">Latest News</h2>
    <div className="grid gap-4">
      {newsItems.map((item, i) => (
        <article
          key={i}
          className="group bg-card rounded-lg border border-border p-5 hover:border-nba-blue/50 transition-all duration-300 cursor-pointer hover:bg-secondary"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-nba-blue bg-nba-blue/10 px-2 py-0.5 rounded">
              {item.category}
            </span>
            <span className="text-xs text-muted-foreground">{item.date}</span>
          </div>
          <h3 className="font-display text-lg font-bold group-hover:text-nba-blue transition-colors mb-1">
            {item.title}
          </h3>
          <p className="text-sm text-muted-foreground">{item.excerpt}</p>
        </article>
      ))}
    </div>
  </div>
);

export default NewsGrid;
