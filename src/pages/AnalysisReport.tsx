import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/card";
import { TrendingUp, AlertTriangle, Lightbulb, ThumbsUp } from "lucide-react";

const swot = [
  { icon: ThumbsUp, title: "Strengths", color: "text-green-600 dark:text-green-400", items: ["Strong front-end fundamentals", "Quick to learn new tools", "Reliable documentation habits"] },
  { icon: AlertTriangle, title: "Weaknesses", color: "text-amber-600 dark:text-amber-400", items: ["Initial hesitation in raising blockers", "Limited backend exposure", "Time estimation under pressure"] },
  { icon: TrendingUp, title: "Opportunities", color: "text-primary", items: ["Deeper backend / API skills", "Open source contributions", "Public-sector tech career path"] },
  { icon: Lightbulb, title: "Insights", color: "text-blue-600 dark:text-blue-400", items: ["Soft skills compound faster than hard skills", "Documentation is a force multiplier", "Empathy improves engineering decisions"] },
];

export default function AnalysisReport() {
  return (
    <PageShell eyebrow="III. Work Experiences" title="Analysis Report" description="A structured look at strengths, gaps, and growth areas observed during the internship.">
      <div className="grid gap-4 md:grid-cols-2">
        {swot.map((s) => (
          <Card key={s.title} className="p-6">
            <div className={`flex items-center gap-2 ${s.color}`}>
              <s.icon className="h-5 w-5" />
              <h3 className="font-semibold">{s.title}</h3>
            </div>
            <ul className="mt-4 space-y-2">
              {s.items.map((it) => (
                <li key={it} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-60" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
