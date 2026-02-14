import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-surface-dark border-t border-border mt-12">
      <div className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-display text-lg font-black text-gradient-nba mb-3">IgitkhanyanNba</h3>
            <p className="text-sm text-muted-foreground">Your ultimate source for basketball news, scores, and statistics.</p>
          </div>
          {[
            { title: "Browse", links: ["Scores", "Schedule", "Teams", "Players"] },
            { title: "Company", links: ["About", "Careers", "Contact", "Press"] },
            { title: "Legal", links: ["Privacy", "Terms", "Cookies", "DMCA"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-3">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 IgitkhanyanNba. All rights reserved.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input
              type="email"
              placeholder="Enter email for newsletter"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-input border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring w-56"
            />
            <button className="bg-nba-blue hover:bg-primary/80 text-primary-foreground text-sm font-bold px-4 py-2 rounded-md transition-colors uppercase tracking-wider">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
