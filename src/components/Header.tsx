import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = ["Scores", "Schedule", "Teams", "Players"];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface-dark/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-14 px-4">
        <a href="/" className="font-display text-xl font-black tracking-tight">
          <span className="text-gradient-nba">IgitkhanyanNba</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="p-2 rounded-md hover:bg-secondary transition-colors" aria-label="Search">
            <Search className="w-4 h-4 text-muted-foreground" />
          </button>
          <button
            className="md:hidden p-2 rounded-md hover:bg-secondary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-surface-dark px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors border-b border-border last:border-0"
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
