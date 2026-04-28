import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/card";
import { Target, CheckCircle2, Sparkles } from "lucide-react";

const general =
  "To develop practical IT knowledge and professional skills through real-world experience at the Red Cross, bridging academic learning with actual workplace applications.";

const specific = [
  "To develop the ability to respond promptly and perform assigned tasks efficiently in real workplace situations and daily operations.",
  "To improve time management skills in organizing tasks, meeting deadlines, and managing internship responsibilities effectively.",
  "To enhance communication skills when interacting with staff, clients, and other personnel in the workplace.",
  "To strengthen editing skills in handling documents, reports, images, and other digital materials accurately and professionally.",
  "To gain experience in gathering, organizing, and managing important data and records needed for office operations.",
  "To understand and assist in safety services and activities conducted by the Red Cross, including emergency response awareness.",
  "To acquire professional growth and work experience in preparation for future IT-related responsibilities.",
  "To gain hands-on experience in assisting blood donation activities such as donor guidance, record preparation, and operational support.",
];

export default function Objectives() {
  return (
    <PageShell
      eyebrow="I. Introduction"
      title="Objectives of Internship in IT"
      description="Clear goals that guided my internship journey at the Red Cross."
    >
      {/* HEADER STRIP */}
      <div className="mb-6 rounded-xl border border-border bg-card p-5">
        <div className="flex items-center gap-2 text-primary">
          <Sparkles className="h-5 w-5" />
          <h2 className="font-semibold">Internship Objectives Overview</h2>
        </div>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          These objectives define the purpose of the internship experience,
          focusing on skill development, professional growth, and real-world IT
          exposure.
        </p>
      </div>

      {/* GRID */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* GENERAL OBJECTIVE */}
        <Card className="group relative overflow-hidden p-6 transition-all hover:shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

          <div className="relative flex items-center gap-2 text-primary">
            <Target className="h-5 w-5" />
            <h2 className="font-semibold">General Objective</h2>
          </div>

          <p className="relative mt-4 text-sm text-muted-foreground leading-relaxed">
            {general}
          </p>
        </Card>

        {/* SPECIFIC OBJECTIVES */}
        <Card className="group p-6 transition-all hover:shadow-lg">
          <div className="flex items-center gap-2 text-primary">
            <CheckCircle2 className="h-5 w-5" />
            <h2 className="font-semibold">Specific Objectives</h2>
          </div>

          <ul className="mt-5 space-y-4">
            {specific.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 rounded-lg border border-border/50 bg-muted/30 p-3 transition hover:bg-muted/50"
              >
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* FOOTER INSIGHT */}
      <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-6">
        <h3 className="font-semibold text-primary">Impact Statement</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          These objectives ensured that every internship task contributed not
          only to technical improvement but also to discipline, adaptability,
          and professional readiness in a real IT environment.
        </p>
      </div>
    </PageShell>
  );
}
