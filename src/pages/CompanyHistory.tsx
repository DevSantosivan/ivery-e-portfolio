import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/card";

const milestones = [
  { year: "1905", title: "American Red Cross Chapter", text: "The Philippine Islands becomes a chapter of the American Red Cross." },
  { year: "1947", title: "Republic Act 95", text: "The Philippine Red Cross is officially founded as an independent national society." },
  { year: "1947", title: "ICRC Recognition", text: "Recognized by the International Committee of the Red Cross as the 64th member society." },
  { year: "2009", title: "Modernization", text: "Expansion of services and digitalization of operations begins." },
  { year: "2018", title: "RA 10072", text: "Updated charter strengthens PRC's role as auxiliary to public authorities." },
  { year: "Today", title: "Nationwide Reach", text: "Over 100 chapters serving Filipinos across the archipelago." },
];

export default function CompanyHistory() {
  return (
    <PageShell eyebrow="II. Company Profile" title="History" description="A timeline of the Philippine Red Cross.">
      <div className="relative">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-1/2" />
        <div className="space-y-8">
          {milestones.map((m, i) => (
            <div key={m.year + m.title} className={`relative flex gap-6 md:items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              <div className="absolute left-4 top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background md:left-1/2" />
              <div className="ml-10 flex-1 md:ml-0 md:max-w-[calc(50%-2rem)]">
                <Card className="p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">{m.year}</p>
                  <h3 className="mt-1 font-semibold">{m.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{m.text}</p>
                </Card>
              </div>
              <div className="hidden md:block md:flex-1" />
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
