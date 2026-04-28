import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/card";
import { Quote, GraduationCap, Wrench, Lightbulb, Sprout } from "lucide-react";

const steps = [
  {
    icon: GraduationCap,
    title: "Learn",
    text: "Apply classroom knowledge to real-world IT environments and workflows.",
  },
  {
    icon: Wrench,
    title: "Apply",
    text: "Turn theoretical concepts into actual system tasks and development work.",
  },
  {
    icon: Lightbulb,
    title: "Experience",
    text: "Face real workplace challenges such as deadlines, users, and system issues.",
  },
  {
    icon: Sprout,
    title: "Grow",
    text: "Develop confidence, discipline, and professional readiness for future roles.",
  },
];

export default function Importance() {
  return (
    <PageShell
      eyebrow="I. Introduction"
      title="Importance of the Internship"
      description="Molding Future IT Professionals through real-world experience and exposure."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <article className="prose prose-neutral max-w-none dark:prose-invert">
          <p className="text-muted-foreground leading-relaxed">
            Internship plays a vital role in molding future IT professionals by
            providing students with practical experience and real-world exposure
            to the field of information technology. It allows trainees to apply
            the knowledge and skills they have learned in the classroom to
            actual workplace tasks and responsibilities.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Through internship, students develop technical competencies,
            problem-solving abilities, communication skills, and professional
            work ethics that are essential in the IT industry. It also helps
            them gain confidence, adapt to workplace environments, and
            understand the expectations of their future careers.
          </p>

          <Card className="my-6 border-l-4 border-l-primary bg-accent/40 p-6 not-prose">
            <Quote className="mb-3 h-6 w-6 text-primary" />
            <p className="text-base font-medium italic">
              "Internship is where knowledge meets reality and students become
              professionals."
            </p>
          </Card>

          <p className="text-muted-foreground leading-relaxed">
            This experience makes students more prepared and competitive as
            aspiring IT professionals, bridging the gap between academic
            learning and real-world application.
          </p>

          <h2 className="mt-8 text-xl font-bold font-display">
            The Learning Cycle
          </h2>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 not-prose">
            {steps.map((s, i) => (
              <Card
                key={s.title}
                className="p-5 transition-all hover:shadow-soft"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Step {i + 1}
                    </p>
                    <h3 className="mt-0.5 font-semibold">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {s.text}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </article>

        <aside className="space-y-4">
          <Card className="p-6">
            <h3 className="font-semibold">Quick Facts</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Required Hours</dt>
                <dd className="font-medium">486 hrs</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Department</dt>
                <dd className="font-medium">IT Services</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Setup</dt>
                <dd className="font-medium">Hybrid</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Supervisor</dt>
                <dd className="font-medium">IT Manager</dd>
              </div>
            </dl>
          </Card>

          <Card className="border-primary/20 bg-primary/5 p-6">
            <h3 className="font-semibold text-primary">Why It Matters</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Internship is not just a requirement — it is the bridge between
              academic learning and professional readiness, where students
              transition into real IT practitioners.
            </p>
          </Card>
        </aside>
      </div>
    </PageShell>
  );
}
