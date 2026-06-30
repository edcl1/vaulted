const options = [
  {
    title: "Buy",
    description: "Browse authenticated pre-owned jewellery from verified sellers.",
  },
  {
    title: "Sell",
    description: "List your piece with expert checks, secure handling, and protected payouts.",
  },
  {
    title: "Authenticate",
    description: "Every item is checked for trust, condition, and legitimacy before it reaches a buyer.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5efe5] text-[#2d2118]">
      <section className="relative min-h-screen px-6 py-8 sm:px-10 lg:px-16">
        <div className="vaulted-monogram pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute left-1/2 top-28 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#6b4a35]/10 blur-3xl" />

        <nav className="relative z-10 flex items-center justify-between border-b border-[#2d2118]/10 pb-6">
          <div className="text-xl font-semibold tracking-[0.32em]">VAULTED</div>
          <div className="hidden items-center gap-10 text-sm tracking-wide text-[#2d2118]/70 md:flex">
            <a className="transition duration-500 hover:text-[#2d2118]" href="#buy">Buy</a>
            <a className="transition duration-500 hover:text-[#2d2118]" href="#sell">Sell</a>
            <a className="transition duration-500 hover:text-[#2d2118]" href="#authenticate">Authentication</a>
          </div>
        </nav>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-120px)] max-w-7xl flex-col justify-center pt-16">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.42em] text-[#6b4a35]">
            Luxury, verified, protected
          </p>

          <h1 className="max-w-5xl text-6xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-9xl">
            The trusted marketplace for authenticated jewellery.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#2d2118]/70 sm:text-xl">
            Vaulted brings confidence to buying and selling pre-owned luxury jewellery, with authentication and trust built into every step.
          </p>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {options.map((option, index) => (
              <a
                id={option.title.toLowerCase()}
                key={option.title}
                href={`#${option.title.toLowerCase()}`}
                className="group rounded-[2rem] border border-[#6b4a35]/20 bg-[#fffaf2]/55 p-7 shadow-[0_24px_80px_rgba(45,33,24,0.06)] backdrop-blur transition duration-700 ease-out hover:-translate-y-1 hover:border-[#6b4a35]/45 hover:bg-[#fffaf2]/95 hover:shadow-[0_32px_90px_rgba(45,33,24,0.12)]"
              >
                <div className="mb-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#6b4a35]/25 text-sm text-[#6b4a35] transition duration-700 ease-out group-hover:border-[#6b4a35] group-hover:bg-[#6b4a35] group-hover:text-[#f5efe5]">
                  0{index + 1}
                </div>
                <h2 className="text-2xl font-medium tracking-[-0.03em]">{option.title}</h2>
                <p className="mt-4 leading-7 text-[#2d2118]/65">{option.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
