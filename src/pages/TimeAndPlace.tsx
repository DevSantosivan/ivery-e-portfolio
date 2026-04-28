import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/card";
import { CalendarDays, Clock, MapPin, Building2 } from "lucide-react";

const items = [
  { icon: CalendarDays, label: "Duration", value: "January 15 – April 28, 2026" },
  { icon: Clock, label: "Total Hours", value: "486 hours" },
  { icon: Building2, label: "Schedule", value: "Mon – Fri · 8:00 AM – 5:00 PM" },
  { icon: MapPin, label: "Location", value: "Philippine Red Cross National HQ, Mandaluyong City" },
];

export default function TimeAndPlace() {
  return (
    <PageShell eyebrow="I. Introduction" title="Time and Place" description="When and where the internship took place.">
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((i) => (
          <Card key={i.label} className="p-6 transition-all hover:shadow-soft">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <i.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{i.label}</p>
                <p className="mt-1 font-semibold">{i.value}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <Card className="mt-6 p-6 bg-accent/40">
        <p className="text-sm text-muted-foreground leading-relaxed">
          The internship was conducted on a hybrid arrangement, with on-site days reserved for cross-team collaboration
          and remote days dedicated to focused development work and documentation.
        </p>
      </Card>
    </PageShell>
  );
}
