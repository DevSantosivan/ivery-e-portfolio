import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/card";
import { Target, CheckCircle2 } from "lucide-react";

const general = "Apply academic IT knowledge in a real organizational setting while contributing meaningfully to the technology operations of the Philippine Red Cross.";

const specific = [
  "Strengthen practical skills in front-end development using React, TypeScript, and modern tooling.",
  "Understand how internal IT teams support humanitarian and administrative operations.",
  "Develop professional communication and collaboration habits across departments.",
  "Document processes clearly so future trainees and staff can build on the work.",
  "Cultivate problem-solving discipline when facing unfamiliar systems and constraints.",
];

export default function Objectives() {
  return (
    <PageShell eyebrow="I. Introduction" title="Objectives" description="What I set out to achieve during this internship.">
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <div className="flex items-center gap-2 text-primary">
            <Target className="h-5 w-5" />
            <h2 className="font-semibold">General Objective</h2>
          </div>
          <p className="mt-3 text-muted-foreground leading-relaxed">{general}</p>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-2 text-primary">
            <CheckCircle2 className="h-5 w-5" />
            <h2 className="font-semibold">Specific Objectives</h2>
          </div>
          <ul className="mt-4 space-y-3">
            {specific.map((s) => (
              <li key={s} className="flex gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </PageShell>
  );
}
