import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/card";
import { Target, CheckCircle2, Sparkles } from "lucide-react";

const general =
  "To develop practical skills, humanitarian knowledge, and professional work values through hands-on experience in a real-world work environment at the Philippine Red Cross Occidental Mindoro Chapter.";

const specific = [
  "To understand the basic operations, core functions, and humanitarian services of the Philippine Red Cross Occidental Mindoro Chapter.",
  "To develop skills in handling medical and office materials while providing quality assistance to donors and beneficiaries.",
  "To enhance communication and interpersonal skills through interaction with volunteers, staff, and community members.",
  "To apply theoretical knowledge and concepts learned in the classroom to actual workplace and field operations.",
  "To improve organizational and time management skills by balancing office tasks with humanitarian activities.",
  "To gain experience in technical processing such as documentation, labeling, and organizing essential chapter materials.",
  "To develop discipline, responsibility, and professionalism within a non-profit and service-oriented environment.",
  "To learn how to work effectively both independently and as part of a team in delivering humanitarian services.",
  "To observe and follow organizational policies, safety protocols, and standard operating procedures.",
  "To prepare for future professional employment by gaining meaningful real-world experience in a fast-paced environment.",
];

export default function Objectives() {
  return (
    <PageShell
      eyebrow="I. Introduction"
      title="Objectives of the Internship"
      description="Defined goals that guided my internship experience at the Philippine Red Cross."
    >
      {/* HEADER */}
      <div className="mb-6 rounded-xl border border-border bg-card p-5 animate-fadeIn">
        <div className="flex items-center gap-2 text-primary">
          <Sparkles className="h-5 w-5" />
          <h2 className="font-semibold">Internship Objectives Overview</h2>
        </div>

        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          These objectives serve as the foundation of the internship experience,
          focusing on skill enhancement, professional growth, and real-world
          exposure within a humanitarian organization.
        </p>
      </div>

      {/* GRID */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* GENERAL */}
        <Card className="relative overflow-hidden p-6 transition-all hover:shadow-lg animate-slideUp">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />

          <div className="relative flex items-center gap-2 text-primary">
            <Target className="h-5 w-5" />
            <h2 className="font-semibold">General Objective</h2>
          </div>

          <p className="relative mt-4 text-sm text-muted-foreground leading-relaxed">
            {general}
          </p>
        </Card>

        {/* SPECIFIC */}
        <Card className="p-6 transition-all hover:shadow-lg animate-slideUp">
          <div className="flex items-center gap-2 text-primary">
            <CheckCircle2 className="h-5 w-5" />
            <h2 className="font-semibold">Specific Objectives</h2>
          </div>

          <ul className="mt-5 space-y-3">
            {specific.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 rounded-lg border border-border/40 bg-muted/30 p-3 transition hover:bg-muted/50"
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

      {/* FOOTER */}
      <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-6 animate-fadeIn">
        <h3 className="font-semibold text-primary">Impact Statement</h3>

        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          These objectives ensured that the internship provided not only
          technical and administrative experience, but also personal growth,
          discipline, and preparedness for future professional responsibilities.
        </p>
      </div>
    </PageShell>
  );
}
