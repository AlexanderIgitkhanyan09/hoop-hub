import { useState } from "react";

const eastern = [
  { team: "BOS", w: 48, l: 12 },
  { team: "CLE", w: 44, l: 15 },
  { team: "NYK", w: 41, l: 19 },
  { team: "MIL", w: 38, l: 22 },
  { team: "MIA", w: 35, l: 25 },
  { team: "PHI", w: 33, l: 26 },
  { team: "IND", w: 32, l: 28 },
  { team: "ORL", w: 31, l: 29 },
];

const western = [
  { team: "OKC", w: 47, l: 13 },
  { team: "DEN", w: 42, l: 17 },
  { team: "MIN", w: 40, l: 20 },
  { team: "DAL", w: 38, l: 22 },
  { team: "LAL", w: 36, l: 23 },
  { team: "PHX", w: 35, l: 25 },
  { team: "SAC", w: 33, l: 27 },
  { team: "GSW", w: 31, l: 29 },
];

const Standings = () => {
  const [conf, setConf] = useState<"east" | "west">("east");
  const data = conf === "east" ? eastern : western;

  return (
    <div className="bg-card rounded-lg border border-border p-5">
      <h2 className="font-display text-lg font-black uppercase tracking-tight mb-4">Conference Standings</h2>
      <div className="flex gap-1 mb-4">
        {(["east", "west"] as const).map((c) => (
          <button
            key={c}
            onClick={() => setConf(c)}
            className={`flex-1 text-xs font-bold uppercase tracking-wider py-2 rounded transition-colors ${
              conf === c ? "bg-nba-blue text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {c === "east" ? "Eastern" : "Western"}
          </button>
        ))}
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-muted-foreground text-xs uppercase tracking-wider">
            <th className="text-left pb-2">#</th>
            <th className="text-left pb-2">Team</th>
            <th className="text-center pb-2">W</th>
            <th className="text-center pb-2">L</th>
            <th className="text-right pb-2">PCT</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={row.team} className="border-t border-border hover:bg-secondary/50 transition-colors">
              <td className="py-2 text-muted-foreground">{i + 1}</td>
              <td className="py-2 font-bold">{row.team}</td>
              <td className="py-2 text-center">{row.w}</td>
              <td className="py-2 text-center">{row.l}</td>
              <td className="py-2 text-right text-nba-gold">{(row.w / (row.w + row.l)).toFixed(3)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Standings;
