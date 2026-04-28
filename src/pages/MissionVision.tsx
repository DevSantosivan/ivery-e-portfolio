import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/card";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <PageShell
      eyebrow="II. Company Profile"
      title="Mission & Vision"
      description="The guiding statements that direct every program and project."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="relative overflow-hidden p-8">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5" />
          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Target className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-xl font-bold font-display">Mission</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Providing timely, efficient, and responsive humanitarian services
              to the most vulnerable in accordance with the principles and
              values of the Red Cross.
            </p>
          </div>
        </Card>
        <Card className="relative overflow-hidden p-8">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5" />
          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Eye className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-xl font-bold font-display">Vision</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              The Philippine Red Cross will be the foremost humanitarian
              organization in the Philippines and in Asia, in services provided
              and number of people served.
            </p>
          </div>
        </Card>
      </div>
      <Card className="mt-6 border-primary/20 bg-primary/5 p-6">
        <h3 className="font-semibold text-primary">Tagline</h3>
        <p className="mt-1 text-lg font-display font-bold">
          "Always First, Always Ready, Always There."
        </p>
      </Card>
    </PageShell>
  );
}
