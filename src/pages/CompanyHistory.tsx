import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/card";

const milestones = [
  {
    year: "1958",
    title: "Chapter Independence",
    text: "The Occidental Mindoro Red Cross Chapter separated from the Batangas-Mindoro Chapter and became an independent chapter. Governor Mariano Tajonera served as the first Chairman of the Board of Directors.",
  },
  {
    year: "1962",
    title: "Leadership Transition",
    text: "Mrs. Fanny Lesaca completed her administration of the chapter and was succeeded by Mrs. Launaria C. Padilla as administrator.",
  },
  {
    year: "1963",
    title: "Expansion of First Aid Services",
    text: "Dr. Telesforo Calasang visited the chapter and inaugurated two first aid stations, strengthening emergency response services in the province.",
  },
  {
    year: "1971",
    title: "New Administration",
    text: "Mr. Jose S. Rodil assumed administration of the chapter and continued managing humanitarian operations and community programs.",
  },
  {
    year: "1970s",
    title: "Safety & Nursing Institutes",
    text: "The chapter conducted provincial and municipal safety institutes, nursing institutes, and established first aid stations during public events and emergencies.",
  },
  {
    year: "1980s",
    title: "Blood Donation Programs",
    text: "Mass blood donation drives were successfully conducted across Occidental Mindoro with strong support from the local community.",
  },
  {
    year: "1990s",
    title: "Disaster Response Operations",
    text: "The chapter continuously provided assistance to thousands of victims affected by typhoons, fires, and other disasters through food, clothing, and medicines.",
  },
  {
    year: "Today",
    title: "Humanitarian Leadership",
    text: "The Occidental Mindoro Red Cross Chapter remains one of the leading humanitarian organizations in the province, delivering independent and life-saving humanitarian services.",
  },
];

export default function CompanyHistory() {
  return (
    <PageShell
      eyebrow="II. Agency Profile"
      title="History / Background of the Agency"
      description="A timeline showcasing the growth and humanitarian legacy of the Occidental Mindoro Red Cross Chapter."
    >
      <div className="space-y-10">
        {/* HERO */}
        <section className="rounded-2xl border bg-card overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent" />

          <div className="relative p-6 md:p-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Agency Background
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-black leading-tight">
              Occidental Mindoro Red Cross Chapter
            </h2>

            <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">
              Since its establishment as an independent chapter in 1958, the
              Occidental Mindoro Red Cross Chapter has continuously provided
              humanitarian services, disaster response, blood donation programs,
              first aid assistance, and community welfare initiatives throughout
              the province.
            </p>
          </div>
        </section>

        {/* TIMELINE */}
        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div
                key={m.year + m.title}
                className={`relative flex gap-6 md:items-center ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* DOT */}
                <div className="absolute left-4 top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background md:left-1/2" />

                {/* CARD */}
                <div className="ml-10 flex-1 md:ml-0 md:max-w-[calc(50%-2rem)]">
                  <Card className="p-5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border bg-background/80 backdrop-blur-sm">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary">
                      {m.year}
                    </p>

                    <h3 className="mt-1 font-semibold text-lg">{m.title}</h3>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {m.text}
                    </p>
                  </Card>
                </div>

                <div className="hidden md:block md:flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER INSIGHT */}
        <Card className="border-l-4 border-primary bg-primary/5 p-5">
          <p className="text-sm leading-relaxed font-medium text-foreground">
            Through decades of humanitarian service, disaster response, and
            community-centered programs, the Occidental Mindoro Red Cross
            Chapter continues to uphold the mission of the Philippine Red Cross
            in serving vulnerable communities and promoting compassion,
            volunteerism, and public welfare.
          </p>
        </Card>
      </div>
    </PageShell>
  );
}
