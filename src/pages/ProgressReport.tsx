import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const progressItems = [
  {
    no: "01",
    objective:
      "Maintained high-level oversight of medical supplies and equipment to ensure operational readiness at all times.",
    work: "Conducted a comprehensive audit and verification of medical equipment and supplies.",
    problem: "None",
  },
  {
    no: "02",
    objective:
      "Advanced proficiency in First Aid and CPR while actively participating in trainee evaluations and assessments.",
    work: "Facilitated bandaging workshops and managed the computation of participant performance evaluations.",
    problem: "None",
  },
  {
    no: "03",
    objective:
      "Transitioned from theory to practice by applying life-saving skills in real-world event settings.",
    work: "Stationed at the First Aid unit under the supervision of Sir Harold and Sir Cirillo to provide medical coverage.",
    problem: "None",
  },
  {
    no: "04",
    objective:
      "Assisted in the strategic setup and logistical preparation of blood donation sites.",
    work: "Created the standee tarpaulin design.",
    problem: "None",
  },
  {
    no: "05",
    objective:
      "Functioned as a primary First Aid provider delivering immediate care and support during community events.",
    work: "Provided on-site first aid assistance and coordinated participant care at the medical station.",
    problem: "None",
  },
  {
    no: "06",
    objective:
      "Contributed to the successful execution and clinical integrity of various Mobile Blood Donation drives.",
    work: "Contributed to the successful execution of the scheduled community activity.",
    problem: "None",
  },
  {
    no: "07",
    objective:
      "Managed the systematic archiving and filing of sensitive organizational records.",
    work: "Executed systematic sorting and archiving of organizational files for better data accessibility.",
    problem: "None",
  },
];

export default function ProgressReport() {
  return (
    <PageShell
      eyebrow="III. Work Experiences"
      title="Internship Progress Report"
      description="Detailed report of internship objectives, accomplishments, and completed activities during the internship period."
    >
      <div className="space-y-8">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-2xl border bg-card">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent" />

          <div className="relative p-6 md:p-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
              Internship Documentation
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-black">
              Internship Progress Report
            </h2>

            <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">
              This report presents the objectives, work accomplishments, and
              internship activities completed at the Philippine Red Cross –
              Occidental Mindoro Chapter during the covered reporting period.
            </p>
          </div>
        </section>

        {/* INFO CARD */}
        <Card className="relative overflow-hidden border bg-card">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent" />

          <div className="relative p-6 md:p-8">
            <div className="mb-6">
              <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                Internship Information
              </span>

              <h3 className="mt-3 text-2xl font-black">Internship Details</h3>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border bg-background/60 p-4">
                <p className="text-[11px] font-bold uppercase tracking-widest text-primary">
                  Name
                </p>

                <h4 className="mt-2 text-base font-semibold">
                  Ivery Abegail M. Policarpio
                </h4>
              </div>

              <div className="rounded-2xl border bg-background/60 p-4">
                <p className="text-[11px] font-bold uppercase tracking-widest text-primary">
                  Date
                </p>

                <h4 className="mt-2 text-base font-semibold">April 26, 2026</h4>
              </div>

              <div className="rounded-2xl border bg-background/60 p-4">
                <p className="text-[11px] font-bold uppercase tracking-widest text-primary">
                  Internship Site
                </p>

                <h4 className="mt-2 text-base font-semibold">
                  Philippine Red Cross Occidental Mindoro Chapter
                </h4>
              </div>

              <div className="rounded-2xl border bg-background/60 p-4">
                <p className="text-[11px] font-bold uppercase tracking-widest text-primary">
                  Hours Completed
                </p>

                <h4 className="mt-2 text-base font-semibold">486 Hours</h4>
              </div>

              <div className="rounded-2xl border bg-background/60 p-4 md:col-span-2">
                <p className="text-[11px] font-bold uppercase tracking-widest text-primary">
                  Office Address
                </p>

                <h4 className="mt-2 text-base font-semibold">
                  Del Pilar St., Brgy. 7, San Jose, Occidental Mindoro
                </h4>
              </div>

              <div className="rounded-2xl border bg-background/60 p-4 md:col-span-2">
                <p className="text-[11px] font-bold uppercase tracking-widest text-primary">
                  Covered Reporting Dates
                </p>

                <h4 className="mt-2 text-base font-semibold">
                  March 1 – April 27, 2026
                </h4>
              </div>
            </div>
          </div>
        </Card>

        {/* PROGRESS ITEMS */}
        <div className="space-y-6">
          {progressItems.map((item) => (
            <Card
              key={item.no}
              className="relative overflow-hidden border bg-card hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-primary" />

              <div className="p-6 space-y-5">
                {/* HEADER */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">Objective {item.no}</h3>

                    <p className="text-sm text-muted-foreground">
                      Internship Progress Documentation
                    </p>
                  </div>

                  <Badge variant="secondary">Completed</Badge>
                </div>

                {/* CONTENT */}
                <div className="grid gap-5 md:grid-cols-3">
                  {/* OBJECTIVE */}
                  <div className="rounded-xl border bg-background/50 p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary">
                      Objectives
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.objective}
                    </p>
                  </div>

                  {/* WORK STATUS */}
                  <div className="rounded-xl border bg-background/50 p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary">
                      Work Status
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.work}
                    </p>
                  </div>

                  {/* PROBLEM */}
                  <div className="rounded-xl border bg-background/50 p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary">
                      Problems Met
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.problem}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* FOOTER */}
        <Card className="border-l-4 border-primary bg-primary/5 p-6">
          <p className="text-sm leading-relaxed font-medium text-foreground">
            The following report accurately describes the internship activities
            completed to date at the Philippine Red Cross – Occidental Mindoro
            Chapter.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Intern
              </p>

              <h4 className="mt-2 text-lg font-bold">
                Ms. Ivery Abegail M. Policarpio
              </h4>

              <p className="text-sm text-muted-foreground mt-1">
                Date: April 20, 2026
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Site Supervisor
              </p>

              <h4 className="mt-2 text-lg font-bold">
                Mr. Cirilo P. Salamanca III
              </h4>

              <p className="text-sm text-muted-foreground mt-1">
                Date: April 22, 2026
              </p>
            </div>
          </div>
        </Card>
      </div>
    </PageShell>
  );
}
