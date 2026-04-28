import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/card";
import { Droplet, Shield, HeartPulse, GraduationCap, HandHelping, Users } from "lucide-react";

const services = [
  { icon: HeartPulse, title: "Disaster Management", text: "Rapid response, relief operations, and resilience programs for affected communities." },
  { icon: Droplet, title: "Blood Services", text: "Voluntary, non-remunerated blood collection, processing, and distribution nationwide." },
  { icon: Shield, title: "Safety Services", text: "First aid, basic life support, and water safety training for individuals and organizations." },
  { icon: GraduationCap, title: "Health Services", text: "Community health programs, immunizations, and primary care outreach." },
  { icon: HandHelping, title: "Welfare Services", text: "Restoring family links, psychosocial support, and humanitarian assistance." },
  { icon: Users, title: "Volunteer Services", text: "Mobilizing thousands of volunteers across the country for humanitarian action." },
];

export default function CompanyServices() {
  return (
    <PageShell eyebrow="II. Company Profile" title="Services" description="The six major services of the Philippine Red Cross.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Card key={s.title} className="group p-6 transition-all hover:-translate-y-0.5 hover:shadow-soft">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">{s.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
