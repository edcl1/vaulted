const options = [
  {
    number: "01",
    title: "MARKETPLACE",
    description: "DISCOVER VERIFIED PIECES",
    action: "ENTER",
    href: "#marketplace",
    featured: true,
  },
  {
    number: "02",
    title: "SELL",
    description: "REQUEST A VALUATION",
    action: "START",
    href: "#sell",
    featured: false,
  },
  {
    number: "03",
    title: "VERIFICATION",
    description: "OUR VERIFICATION PROCESS",
    action: "VERIFY",
    href: "#authenticate",
    featured: false,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <section className="relative min-h-screen px-6 py-7 sm:px-10 lg:px-14">
        <div className="hero-background pointer-events-none absolute inset-0" />
        <div className="vaulted-monogram pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute left-1/2 top-10 h-[620px] w-[820px] -translate-x-1/2 rounded-full bg-walnut/20 blur-3xl" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between border-b border-foreground/10 pb-6">
          <div className="text-xl font-semibold uppercase tracking-[0.34em] text-foreground">VAULTED</div>
          <div className="hidden items-center gap-14 text-xs font-semibold uppercase tracking-[0.28em] text-foreground/70 md:flex">
            <a className="transition duration-[850ms] ease-out hover:text-foreground" href="#about">About Us</a>
            <span className="select-none text-foreground/30">|</span>
            <a className="transition duration-[850ms] ease-out hover:text-foreground" href="#verification">Verification Process</a>
          </div>
        </nav>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-110px)] max-w-7xl flex-col justify-center pt-16">
          <div className="mx-auto max-w-5xl text-center">

            <h1 className="text-2xl font-semibold uppercase leading-[1.45] tracking-[0.34em] text-foreground sm:text-4xl lg:text-5xl">
              THE MODERN MARKETPLACE FOR<br />PRE-OWNED JEWELLERY
            </h1>

          </div>

          <div className="mx-auto mt-16 grid w-full max-w-6xl gap-5 lg:grid-cols-2">
            {options.map((option) => (
              <a
                id={option.href.replace("#", "")}
                key={option.title}
                href={option.href}
                className={`group flex min-h-44 flex-col justify-between rounded-[1.75rem] border border-foreground/8 bg-foreground/[0.035] p-8 shadow-[0_18px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl transition duration-[850ms] ease-out hover:-translate-y-1 hover:border-walnut/45 hover:bg-foreground/[0.055] hover:shadow-[0_26px_70px_rgba(0,0,0,0.10)] ${
                  option.featured ? "lg:col-span-2 lg:min-h-52" : ""
                }`}
              >
                <div className="flex items-center gap-5 text-[11px] font-semibold uppercase tracking-[0.32em] text-walnut/70">
                  <span>{option.number}</span>
                  <span className="h-px flex-1 bg-foreground/10" />
                </div>

                <div className="mt-8">
                  <h2 className={`${option.featured ? "text-xl sm:text-2xl" : "text-lg"} font-semibold uppercase tracking-[0.3em] text-foreground`}>
                    {option.title}
                  </h2>
                  <p className="mt-5 max-w-xl text-xs font-semibold uppercase leading-7 tracking-[0.2em] text-foreground/62">
                    {option.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.34em] text-walnut/85">
                  <span>{option.action}</span>
                  <span className="transition duration-[850ms] ease-out group-hover:translate-x-2">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
