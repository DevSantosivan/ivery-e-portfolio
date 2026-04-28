import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Globe2, Users, HeartHandshake } from "lucide-react";

export default function CompanyNature() {
  return (
    <PageShell
      eyebrow="II. Company Profile"
      title="Nature of Agency"
      description="Overview of the Philippine Red Cross Occidental Mindoro Chapter and its humanitarian operations."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {/* MAIN DESCRIPTION (FROM YOUR ORIGINAL DATA) */}
        <Card className="relative p-6 lg:col-span-2 overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-1 bg-primary" />

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Building2 className="h-6 w-6" />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground">
                Philippine Red Cross Occidental Mindoro Chapter
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Located at Del Pilar St., Brgy. 7, San Jose, Occidental Mindoro,
                the Philippine Red Cross is a non-government humanitarian
                organization dedicated to saving lives and alleviating human
                suffering. It operates with approximately 10 employees and
                focuses on emergency response, blood donation services, disaster
                preparedness, and community health programs.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The Philippine Red Cross (PRC) is a voluntary, independent, and
                autonomous humanitarian organization committed to protecting
                human life and dignity through effective and compassionate
                service.
              </p>
            </div>
          </div>
        </Card>

        {/* QUICK INFO */}
        <Card className="p-6">
          <div className="flex items-center gap-2 text-primary">
            <HeartHandshake className="h-5 w-5" />
            <h3 className="font-semibold">At a Glance</h3>
          </div>

          <div className="mt-4 space-y-4 text-sm">
            <div>
              <p className="text-muted-foreground">Sector</p>
              <p className="font-medium">Non-profit Humanitarian</p>
            </div>

            <div>
              <p className="text-muted-foreground">Location</p>
              <p className="font-medium">Occidental Mindoro</p>
            </div>

            <div>
              <p className="text-muted-foreground">Workforce</p>
              <p className="font-medium">~10 Employees</p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2">
              <Badge variant="secondary">Humanitarian</Badge>
              <Badge variant="secondary">Volunteer-led</Badge>
              <Badge variant="secondary">Neutral</Badge>
              <Badge variant="secondary">Non-profit</Badge>
            </div>
          </div>
        </Card>
      </div>

      {/* INFO GRID */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {[
          {
            icon: Globe2,
            label: "Service Scope",
            value: "Emergency Response & Humanitarian Services",
          },
          {
            icon: Users,
            label: "Workforce",
            value: "Staff + Volunteers Network",
          },
          {
            icon: Building2,
            label: "Organization Type",
            value: "Independent Humanitarian NGO",
          },
        ].map(({ icon: Icon, label, value }) => (
          <Card
            key={label}
            className="group relative p-5 transition hover:shadow-lg"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-primary/70" />

            <Icon className="h-5 w-5 text-primary" />

            <div className="mt-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {label}
            </div>

            <div className="mt-1 text-base font-semibold text-foreground">
              {value}
            </div>
          </Card>
        ))}
      </div>

      {/* PRINCIPLES (FROM YOUR ORIGINAL FILE — ADDED UI) */}
      <Card className="mt-6 p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          7 Fundamental Principles
        </h3>

        <ul className="grid gap-3 text-sm text-muted-foreground md:grid-cols-2">
          <li>
            <strong className="text-foreground">Humanity</strong> – We serve
            people, not systems
          </li>
          <li>
            <strong className="text-foreground">Impartiality</strong> – We
            assist without discrimination
          </li>
          <li>
            <strong className="text-foreground">Neutrality</strong> – We take
            initiatives but never sides
          </li>
          <li>
            <strong className="text-foreground">Independence</strong> – We act
            based on humanitarian need
          </li>
          <li>
            <strong className="text-foreground">Voluntary Service</strong> –
            Driven by compassion, not profit
          </li>
          <li>
            <strong className="text-foreground">Unity</strong> – One
            organization, one mission
          </li>
          <li>
            <strong className="text-foreground">Universality</strong> – Global
            humanitarian cooperation
          </li>
        </ul>
      </Card>
    </PageShell>
  );
}
