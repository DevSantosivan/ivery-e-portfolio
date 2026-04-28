import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const weeks = [
  { week: 1, dates: "Jan 15 – Jan 19", focus: "Onboarding & Orientation", tasks: ["Orientation with the IT team", "Account setup and access provisioning", "Tour of the National HQ"], status: "Completed" },
  { week: 2, dates: "Jan 22 – Jan 26", focus: "Tooling & Codebase", tasks: ["Setup of dev environment (Node, Vite, Git)", "Walkthrough of internal repos", "First small bug fix on staff portal"], status: "Completed" },
  { week: 3, dates: "Jan 29 – Feb 02", focus: "UI Components", tasks: ["Built reusable card components", "Refactored shared form layouts"], status: "Completed" },
  { week: 4, dates: "Feb 05 – Feb 09", focus: "Internal Dashboard", tasks: ["Implemented filter UI for staff list", "Improved table responsiveness"], status: "Completed" },
  { week: 5, dates: "Feb 12 – Feb 16", focus: "Documentation Sprint", tasks: ["Wrote setup docs for new trainees", "Standardized README templates"], status: "Completed" },
  { week: 6, dates: "Feb 19 – Feb 23", focus: "Support Rotation", tasks: ["Shadowed end-user support tickets", "Documented common issues + fixes"], status: "Completed" },
  { week: 7, dates: "Feb 26 – Mar 01", focus: "Accessibility Pass", tasks: ["Audited color contrast", "Improved keyboard navigation"], status: "Completed" },
  { week: 8, dates: "Mar 04 – Mar 08", focus: "Mid-Internship Review", tasks: ["Self-assessment and feedback session", "Goal recalibration with supervisor"], status: "Completed" },
  { week: 9, dates: "Mar 11 – Mar 15", focus: "Reports Module", tasks: ["Designed weekly report layout", "Connected mock data preview"], status: "Completed" },
  { week: 10, dates: "Mar 18 – Mar 22", focus: "Polish & Performance", tasks: ["Reduced bundle size on dashboard", "Lazy-loaded heavy routes"], status: "Completed" },
  { week: 11, dates: "Mar 25 – Mar 29", focus: "QA Cycle", tasks: ["Manual cross-browser testing", "Logged & triaged 12 issues"], status: "Completed" },
  { week: 12, dates: "Apr 01 – Apr 05", focus: "E-Portfolio Build", tasks: ["Started this E-Portfolio app", "Drafted page structure & content"], status: "Completed" },
  { week: 13, dates: "Apr 08 – Apr 12", focus: "Handover Prep", tasks: ["Wrote handover docs", "Recorded loom-style walkthroughs"], status: "Completed" },
  { week: 14, dates: "Apr 15 – Apr 19", focus: "Final Review", tasks: ["Stakeholder demo", "Feedback consolidation"], status: "Completed" },
  { week: 15, dates: "Apr 22 – Apr 28", focus: "Wrap-up", tasks: ["Final exit interview", "Submission of deliverables"], status: "Ongoing" },
];

export default function WeeklyReports() {
  return (
    <PageShell eyebrow="III. Work Experiences" title="Weekly Reports" description="A week-by-week journal of tasks, focus, and progress.">
      <div className="grid gap-4">
        {weeks.map((w) => (
          <Card key={w.week} className="p-5 transition-all hover:shadow-soft">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Week {w.week} · {w.dates}</p>
                <h3 className="mt-1 font-semibold">{w.focus}</h3>
              </div>
              <Badge variant={w.status === "Ongoing" ? "default" : "secondary"}>{w.status}</Badge>
            </div>
            <ul className="mt-3 grid gap-1.5 text-sm text-muted-foreground sm:grid-cols-2">
              {w.tasks.map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
