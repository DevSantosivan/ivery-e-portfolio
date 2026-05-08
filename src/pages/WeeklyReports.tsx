import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const reports = [
  {
    week: "Week 1",
    period: "Jan 29 - Feb 04, 2026",
    objective:
      "Mastered the operational framework of the Blood Management Service through orientation.",
    work: "Completed comprehensive orientation with Ma’am Christine; received official booklet and Fact Book.",
  },
  {
    week: "Week 2",
    period: "Feb 05 - Feb 11, 2026",
    objective:
      "Compiled critical infrastructure data including road networks and regional hazard maps.",
    work: "Completed infrastructure data gathering (roads, schools, bridges, hazard maps, etc.).",
  },
  {
    week: "Week 3",
    period: "Feb 12 - Feb 18, 2026",
    objective:
      "Designed and edited high-impact visual engagement media under team direction.",
    work: "Successfully created and edited flyers assigned by Sir Ado to drive Mobile Blood Donation campaign engagement.",
  },
  {
    week: "Week 4",
    period: "Feb 19 - Feb 25, 2026",
    objective:
      "Applied practical emergency skills and created promotional visual tools.",
    work: "Created the standee tarpaulin design and assisted with and audited bandaging procedures during live training.",
  },
  {
    week: "Week 5",
    period: "Feb 26 - Mar 04, 2026",
    objective:
      "Streamlined data integrity and organizational efficiency through high-volume encoding.",
    work: "Assisted with and reviewed functional database entry and framework operations.",
  },
  {
    week: "Week 6",
    period: "Mar 05 - Mar 11, 2026",
    objective:
      "Maintained high-level oversight and verification of medical supplies and equipment.",
    work: "Conducted a comprehensive audit and verification of medical equipment and supplies.",
  },
  {
    week: "Week 7",
    period: "Mar 12 - Mar 18, 2026",
    objective:
      "Advanced proficiency in First Aid/CPR and assisted with trainee evaluations.",
    work: "Facilitated bandaging workshops and managed the formal computation of participant performance evaluations.",
  },
  {
    week: "Week 8",
    period: "Mar 19 - Mar 25, 2026",
    objective:
      "Transitioned from theory to clinical practice as an active emergency medical responder.",
    work: "Stationed at the First Aid unit under the supervision of Sir Harold and Sir Cirillo to provide medical coverage.",
  },
  {
    week: "Week 9",
    period: "Mar 26 - Apr 01, 2026",
    objective:
      "Assisted in the strategic setup and logistical preparation of blood donation sites.",
    work: "Created specified standee tarpaulin designs and finalized layout workflow plans.",
  },
  {
    week: "Week 10",
    period: "Apr 02 - Apr 08, 2026",
    objective:
      "Functioned as a primary First Aid provider delivering immediate on-site care.",
    work: "Provided on-site first aid assistance and coordinated patient care logistics at the medical station.",
  },
  {
    week: "Week 11",
    period: "Apr 09 - Apr 15, 2026",
    objective:
      "Contributed to the clinical execution and overall integrity of scheduled community drives.",
    work: "Contributed to the successful execution of the scheduled community blood donation activity.",
  },
  {
    week: "Week 12",
    period: "Apr 16 - Apr 22, 2026",
    objective:
      "Managed systematic archiving and high-volume sorting of sensitive organizational records.",
    work: "Executed systematic sorting and archiving of organizational files for enhanced data accessibility.",
  },
  {
    week: "Week 13",
    period: "Apr 23 - Apr 27, 2026",
    objective:
      "Finalized reporting logs, database checks, and summarized total completed hours.",
    work: "Reviewed semester-long documentation, finalized system updates, and verified 494 internship hours.",
  },
];

export default function WeeklyReports() {
  return (
    <PageShell
      eyebrow="III. Work Experiences"
      title="Weekly Accomplishment Report"
      description="Formal weekly documentation of internship activities and accomplishments during the internship period."
    >
      <div className="space-y-8">
        {/* HERO HEADER */}
        <section className="relative overflow-hidden rounded-2xl border bg-card">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent" />

          <div className="relative p-6 md:p-10 space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Internship Documentation
            </span>

            <h2 className="text-3xl md:text-4xl font-black">
              Weekly Accomplishment Report
            </h2>

            <p className="max-w-3xl text-muted-foreground leading-relaxed">
              This report presents the weekly objectives, work accomplishments,
              and responsibilities completed during the internship at the
              Philippine Red Cross – Occidental Mindoro Chapter.
            </p>
          </div>
        </section>

        {/* INFORMATION CARD */}
        <Card className="relative overflow-hidden border bg-card">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent" />

          <div className="relative p-6 md:p-8">
            {/* HEADER */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                Internship Details
              </span>

              <h3 className="mt-3 text-2xl font-black">
                Internship Information
              </h3>

              <p className="text-sm text-muted-foreground mt-1">
                Official internship information and reporting details.
              </p>
            </div>

            {/* DETAILS */}
            <div className="grid gap-4 md:grid-cols-2">
              {/* INTERN NAME */}
              <div className="rounded-2xl border bg-background/60 p-4">
                <p className="text-[11px] font-bold uppercase tracking-widest text-primary">
                  Name of Intern
                </p>

                <h4 className="mt-2 text-base font-semibold">
                  Ivery Abegail M. Policarpio
                </h4>
              </div>

              {/* REPORTING PERIOD */}
              <div className="rounded-2xl border bg-background/60 p-4">
                <p className="text-[11px] font-bold uppercase tracking-widest text-primary">
                  Reporting Period
                </p>

                <h4 className="mt-2 text-base font-semibold">
                  January 29, 2026 – April 27, 2026
                </h4>
              </div>

              {/* INTERNSHIP SITE */}
              <div className="rounded-2xl border bg-background/60 p-4">
                <p className="text-[11px] font-bold uppercase tracking-widest text-primary">
                  Internship Site
                </p>

                <h4 className="mt-2 text-base font-semibold">
                  Philippine Red Cross - Occidental Mindoro Chapter
                </h4>
              </div>

              {/* HOURS */}
              <div className="rounded-2xl border bg-background/60 p-4">
                <p className="text-[11px] font-bold uppercase tracking-widest text-primary">
                  Total Internship Hours
                </p>

                <h4 className="mt-2 text-base font-semibold">486 Hours</h4>
              </div>

              {/* ADDRESS */}
              <div className="rounded-2xl border bg-background/60 p-4 md:col-span-2">
                <p className="text-[11px] font-bold uppercase tracking-widest text-primary">
                  Office Address
                </p>

                <h4 className="mt-2 text-base font-semibold">
                  Del Pilar St., Brgy. 7, San Jose, Occidental Mindoro
                </h4>
              </div>
            </div>
          </div>
        </Card>

        {/* WEEKLY REPORTS */}
        <div className="space-y-6">
          {reports.map((report, i) => (
            <Card
              key={i}
              className="relative overflow-hidden border bg-card hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-primary" />

              <div className="p-6 space-y-5">
                {/* HEADER */}
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{report.week}</h3>

                    <p className="text-sm text-muted-foreground">
                      {report.period}
                    </p>
                  </div>

                  <Badge variant="secondary">Completed</Badge>
                </div>

                {/* CONTENT */}
                <div className="grid gap-5 md:grid-cols-2">
                  {/* OBJECTIVE */}
                  <div className="rounded-xl border bg-background/50 p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary">
                      Objectives
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {report.objective}
                    </p>
                  </div>

                  {/* WORK STATUS */}
                  <div className="rounded-xl border bg-background/50 p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary">
                      Work Status / Accomplishments
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {report.work}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* FOOTER NOTE */}
        <Card className="border-l-4 border-primary bg-primary/5 p-5">
          <p className="text-sm leading-relaxed font-medium text-foreground">
            The weekly entries detailed above accurately describe the formal
            internship accomplishments completed during the specified dates at
            the Philippine Red Cross - Occidental Mindoro Chapter.
          </p>
        </Card>
      </div>
    </PageShell>
  );
}
