import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Star } from "lucide-react";

const scores = [
  { label: "Technical Skills", value: 92 },
  { label: "Work Quality", value: 90 },
  { label: "Initiative", value: 88 },
  { label: "Teamwork", value: 95 },
  { label: "Communication", value: 87 },
  { label: "Punctuality & Attendance", value: 98 },
];

const overall = Math.round(scores.reduce((a, b) => a + b.value, 0) / scores.length);

export default function Assessment() {
  return (
    <PageShell eyebrow="IV. Assessment" title="Internship Assessment" description="Evaluation summary based on supervisor feedback and self-reflection.">
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <Card className="p-6">
          <h3 className="font-semibold">Performance Breakdown</h3>
          <div className="mt-5 space-y-4">
            {scores.map((s) => (
              <div key={s.label}>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{s.label}</span>
                  <span className="text-muted-foreground">{s.value}%</span>
                </div>
                <Progress value={s.value} className="mt-2 h-2" />
              </div>
            ))}
          </div>
        </Card>

        <div className="space-y-4">
          <Card className="bg-gradient-hero p-6 text-primary-foreground">
            <p className="text-xs uppercase tracking-wider opacity-80">Overall Rating</p>
            <p className="mt-1 text-5xl font-bold font-display">{overall}<span className="text-2xl">%</span></p>
            <div className="mt-3 flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4" fill="currentColor" />
              ))}
            </div>
            <p className="mt-3 text-sm opacity-90">Outstanding</p>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold">Supervisor Remarks</h3>
            <p className="mt-2 text-sm text-muted-foreground italic">
              "Mark approached every task with discipline and humility. He grew quickly into a dependable contributor
              and left the team better than he found it."
            </p>
            <p className="mt-3 text-xs font-medium text-muted-foreground">— IT Manager, Philippine Red Cross</p>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}
