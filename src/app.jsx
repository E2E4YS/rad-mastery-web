// App shell — sticky nav + page composition.

const NAV_LINKS = [
  { label: 'Technology', href: '#technology' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Pilot Program', href: '#pilot' },
  { label: 'Contact', href: '#contact' },
];

const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const FM2 = window.FramerMotion || {};
  const m = FM2.motion;
  const AnimatePresence = FM2.AnimatePresence;

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on link tap
  const handleClick = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-line shadow-[0_1px_0_rgba(15,23,42,0.02)]'
          : 'bg-white/70 backdrop-blur border-b border-transparent'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="h-16 lg:h-[68px] flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 text-navy hover:text-medblue transition-colors">
            <span className="text-medblue"><IconLogoMark className="w-7 h-7" /></span>
            <span className="font-semibold tracking-tight text-[15.5px] sm:text-[16px]">
              Rad Mastery <span className="text-slate-400 font-medium">Software LLC</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3.5 py-2 text-[13.5px] font-medium text-navy hover:text-medblue transition-colors rounded-md"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-navy text-white text-[13px] font-semibold hover:bg-medblue transition-colors"
            >
              Request Pilot
              <IconArrowRight className="w-3.5 h-3.5" />
            </a>
          </nav>

          <button
            type="button"
            className="lg:hidden p-2 -mr-2 rounded-md text-navy hover:text-medblue hover:bg-soft transition-colors"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <IconClose className="w-5 h-5" /> : <IconMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {AnimatePresence && (
        <AnimatePresence>
          {open && (
            <m.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.22, 0.61, 0.36, 1] }}
              className="lg:hidden border-t border-line bg-white/95 backdrop-blur-md"
            >
              <div className="px-5 sm:px-8 py-4">
                <nav className="flex flex-col" aria-label="Mobile">
                  {NAV_LINKS.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={handleClick}
                      className="py-3 text-[15px] font-medium text-navy border-b border-line/70 last:border-0"
                    >
                      {l.label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={handleClick}
                    className="mt-4 inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-md bg-navy text-white text-[14px] font-semibold"
                  >
                    Request Pilot Access
                    <IconArrowRight className="w-3.5 h-3.5" />
                  </a>
                </nav>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      )}
    </header>
  );
};

const App = () => (
  <div className="min-h-screen bg-white" data-screen-label="Rad Mastery Landing">
    <Nav />
    <main>
      <Hero />
      <ProblemSolution />
      <Technology />
      <WorkflowSection />
      <NativeApp />
      <Pilot />
      <EducationalUse />
      <About />
      <Contact />
    </main>
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
