
export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-lg flex justify-between items-center px-8 h-20">
      <div className="flex items-center gap-6">
        <div className="font-serif italic text-2xl tracking-tighter leading-none">
          LUXE RESERVE
        </div>
      </div>

      <nav className="hidden md:flex items-center space-x-12">
        <a href="#" className="text-secondary font-bold text-[10px] uppercase tracking-[0.2em]">Reserve</a>
        <a href="#" className="text-on-surface-variant/60 hover:text-secondary transition-colors font-medium text-[10px] uppercase tracking-[0.2em]">Suites</a>
        <a href="#" className="text-on-surface-variant/60 hover:text-secondary transition-colors font-medium text-[10px] uppercase tracking-[0.2em]">Concierge</a>
      </nav>

      <div className="flex items-center gap-8">
        <span className="hidden sm:inline font-serif text-lg tracking-tight text-on-surface-variant">
          Welcome, Julian
        </span>
        <button className="text-on-surface-variant/60 hover:text-secondary transition-colors text-[10px] uppercase font-bold">
          Log Out
        </button>
      </div>
    </header>
  );
}
