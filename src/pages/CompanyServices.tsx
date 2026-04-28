import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/card";
import {
  Droplet,
  Shield,
  HeartPulse,
  GraduationCap,
  HandHelping,
  Users,
} from "lucide-react";

const services = [
  {
    icon: HeartPulse,
    title: "Disaster Management",
    text: "Rapid response, relief operations, and resilience programs for affected communities.",
  },
  {
    icon: Droplet,
    title: "Blood Services",
    text: "Voluntary, non-remunerated blood collection, processing, and distribution nationwide.",
  },
  {
    icon: Shield,
    title: "Safety Services",
    text: "First aid, basic life support, and water safety training for individuals and organizations.",
  },
  {
    icon: GraduationCap,
    title: "Health Services",
    text: "Community health programs, immunizations, and primary care outreach.",
  },
  {
    icon: HandHelping,
    title: "Welfare Services",
    text: "Restoring family links, psychosocial support, and humanitarian assistance.",
  },
  {
    icon: Users,
    title: "Volunteer Services",
    text: "Mobilizing thousands of volunteers across the country for humanitarian action.",
  },
];

export default function CompanyServices() {
  return (
    <PageShell
      eyebrow="II. Company Profile"
      title="Services"
      description="The six major humanitarian services of the Philippine Red Cross."
    >
      {/* HEADER NOTE */}
      <Card className="mb-6 p-6 bg-accent/30">
        <p className="text-sm text-muted-foreground leading-relaxed">
          The Philippine Red Cross provides life-saving humanitarian services
          focused on disaster response, health care, safety training, and
          community support programs across the country.
        </p>
      </Card>

      {/* SERVICES GRID */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Card
            key={s.title}
            className="group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* accent bar */}
            <div className="absolute left-0 top-0 h-full w-1 bg-primary" />

            {/* icon */}
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
              <s.icon className="h-5 w-5" />
            </div>

            {/* content */}
            <h3 className="mt-4 text-base font-semibold text-foreground">
              {s.title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {s.text}
            </p>
          </Card>
        ))}
      </div>

      {/* FOOTER INSIGHT */}
      <Card className="mt-6 p-6 border border-border">
        <p className="text-sm text-muted-foreground leading-relaxed">
          These six core services reflect the Philippine Red Cross commitment to
          humanitarian aid, ensuring timely response, community resilience, and
          continuous support for vulnerable populations nationwide.
        </p>
      </Card>
    </PageShell>
  );
}
