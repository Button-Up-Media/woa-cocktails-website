const envVars = [
  "NEXT_PUBLIC_SITE_URL",
  "NEXT_PUBLIC_CALENDLY_URL",
  "NEXT_PUBLIC_GA_ID",
  "NEXT_PUBLIC_GTM_ID",
];

export default function SetupAndDeploymentPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-12 text-foreground sm:px-10">
      <div className="rounded-[2rem] border border-[color:var(--border)] bg-white/5 p-6 shadow-2xl shadow-black/20 sm:p-8">
        <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">
          WOA Cocktails
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
          Setup and deployment notes
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[color:var(--muted)]">
          This page documents the phase 1 foundation so the team can keep
          building in multiple chat windows without losing the deployment
          conventions.
        </p>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="rounded-[1.25rem] border border-[color:var(--border)] bg-black/20 p-5">
            <h2 className="text-sm uppercase tracking-[0.26em] text-[color:var(--accent)]">
              Branch flow
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-[color:var(--muted)]">
              <li>
                `main` is reserved for production-ready merges.
              </li>
              <li>Feature branches should be used for every page or task.</li>
              <li>Vercel preview URLs are the default review surface.</li>
            </ul>
          </article>

          <article className="rounded-[1.25rem] border border-[color:var(--border)] bg-black/20 p-5">
            <h2 className="text-sm uppercase tracking-[0.26em] text-[color:var(--accent)]">
              Environment variables
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-[color:var(--muted)]">
              {envVars.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-8 rounded-[1.25rem] border border-[color:var(--border)] bg-black/20 p-5">
          <h2 className="text-sm uppercase tracking-[0.26em] text-[color:var(--accent)]">
            Next build targets
          </h2>
          <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
            The foundation is ready for the home page, the service landing page
            suite, the location pages for Miami and NYC, and Calendly booking
            integration.
          </p>
        </section>
      </div>
    </main>
  );
}
