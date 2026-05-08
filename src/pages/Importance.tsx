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
      <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
        {/* MAIN */}
        <article className="space-y-6 animate-fadeIn">
          <p className="text-muted-foreground leading-relaxed text-[15px]">
            Internships act as a vital bridge between classroom learning and
            professional work. They allow students to apply theories into
            real-world business environments and understand how industries
            operate daily.
          </p>

          <p className="text-muted-foreground leading-relaxed text-[15px]">
            Beyond technical skills, internships develop communication,
            teamwork, problem-solving, and professional ethics—skills that are
            essential in any IT career.
          </p>

          {/* QUOTE */}
          <Card className="border-l-4 border-l-primary bg-primary/5 p-6 transition-all hover:shadow-md">
            <Quote className="mb-3 h-6 w-6 text-primary" />
            <p className="italic font-medium">
              “Internship is where knowledge meets reality and students become
              professionals.”
            </p>
          </Card>

          <p className="text-muted-foreground leading-relaxed text-[15px]">
            It builds confidence, resilience, and clarity in career direction by
            exposing students to real projects, mentorship, and workplace
            expectations.
          </p>

          {/* STEPS */}
          <h2 className="text-xl font-bold pt-4">The Learning Cycle</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map((s, i) => (
              <Card
                key={s.title}
                className="p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg animate-slideUp"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-muted-foreground">
                      Step {i + 1}
                    </p>
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.text}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <p className="text-muted-foreground leading-relaxed text-[15px] pt-4">
            This experience transforms students into industry-ready
            professionals by giving them real exposure, hands-on practice, and a
            deeper understanding of their chosen field.
          </p>
        </article>

        {/* SIDEBAR */}
        <aside className="space-y-4 animate-fadeIn">
          <Card className="p-6 hover:shadow-md transition-all">
            <h3 className="font-semibold">Quick Facts</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Required Hours</dt>
                <dd className="font-medium">486 hrs</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Department</dt>
                <dd className="font-medium">IT Services</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Setup</dt>
                <dd className="font-medium">Hybrid</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">OIC</dt>
                <dd className="font-medium">Officer In charge</dd>
              </div>
            </dl>
          </Card>

          <Card className="bg-primary/5 border-primary/20 p-6 transition-all hover:shadow-md">
            <h3 className="font-semibold text-primary">Why It Matters</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Internship bridges academic learning and professional readiness,
              shaping students into real-world IT practitioners.
            </p>
          </Card>
        </aside>
      </div>
    </PageShell>
  );
}
