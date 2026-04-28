import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const items = [
  { label: "Front-end Development (React + TS)", value: 92 },
  { label: "Internal Tooling & Documentation", value: 85 },
  { label: "End-user Support Exposure", value: 70 },
  { label: "Cross-team Collaboration", value: 88 },
  { label: "Version Control (Git/GitHub)", value: 90 },
  { label: "QA & Accessibility", value: 75 },
];

export default function ProgressReport() {
  return (
    <PageShell eyebrow="III. Work Experiences" title="Progress Report" description="Skill growth and competency progression throughout the internship.">
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((i) => (
          <Card key={i.label} className="p-5">
            <div className="flex items-baseline justify-between">
              <p className="text-sm font-medium">{i.label}</p>
              <p className="text-sm font-bold text-primary">{i.value}%</p>
            </div>
            <Progress value={i.value} className="mt-3 h-2" />
          </Card>
        ))}
      </div>
      <Card className="mt-6 p-6 bg-accent/40">
        <h3 className="font-semibold">Reflection</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          The biggest jumps came from areas I least expected — collaboration and documentation. Coding skills grew
          steadily, but learning to communicate technical work to non-technical teammates was the breakthrough.
        </p>
      </Card>
    </PageShell>
  );
}
