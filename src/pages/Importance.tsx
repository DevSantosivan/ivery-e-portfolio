import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/card";
import { Quote, GraduationCap, Wrench, Lightbulb, Sprout } from "lucide-react";

const steps = [
  { icon: GraduationCap, title: "Learn", text: "Absorb new tools, workflows, and team conventions." },
  { icon: Wrench, title: "Apply", text: "Translate concepts into real tasks and contributions." },
  { icon: Lightbulb, title: "Experience", text: "Encounter the messy reality of users, deadlines, and systems." },
  { icon: Sprout, title: "Grow", text: "Reflect, refine, and step into the next role with confidence." },
];

export default function Importance() {
  return (
    <PageShell
      eyebrow="I. Introduction"
      title="Importance of the Internship"
      description="Why on-the-job training is the bridge between academic theory and the working world."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <article className="prose prose-neutral max-w-none dark:prose-invert">
          <p className="text-muted-foreground leading-relaxed">
            On-the-Job Training is more than a graduation requirement — it is the moment a student steps out of the
            classroom and into a real organization where decisions have weight, deadlines are real, and users are
            depending on the work. For an IT student, that shift is transformative.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Internship exposes us to the unspoken parts of the profession: working with people across departments,
            interpreting unclear requirements, communicating progress, and recovering gracefully from mistakes. These
            are skills no exam can measure but every employer expects.
          </p>

          <Card className="my-6 border-l-4 border-l-primary bg-accent/40 p-6 not-prose">
            <Quote className="mb-3 h-6 w-6 text-primary" />
            <p className="text-base font-medium italic">
              "Tell me and I forget, teach me and I may remember, involve me and I learn."
            </p>
            <p className="mt-2 text-sm text-muted-foreground">— Benjamin Franklin</p>
          </Card>

          <p className="text-muted-foreground leading-relaxed">
            At the Philippine Red Cross, my internship carries an additional weight: the systems we touch ultimately
            support humanitarian operations. That context turns every small ticket into a meaningful contribution.
          </p>

          <h2 className="mt-8 text-xl font-bold font-display">The Learning Cycle</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 not-prose">
            {steps.map((s, i) => (
              <Card key={s.title} className="p-5 transition-all hover:shadow-soft">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Step {i + 1}</p>
                    <h3 className="mt-0.5 font-semibold">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
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
              An internship doesn't just complete a curriculum — it completes a student. It is where competence,
              character, and career first meet.
            </p>
          </Card>
        </aside>
      </div>
    </PageShell>
  );
}
