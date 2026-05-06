import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const reports = [
  {
    period: "JAN 29 - FEB 27, 2026",
    data: [
      {
        obj: "Mastered the operational framework of the Blood Management Service through a comprehensive orientation and a deep dive into the official Fact Book.",
        work: "Completed orientation with Ma’am Christine; received official booklet and Fact Book.",
        problem: "None",
      },
      {
        obj: "Compiled critical infrastructure data, including road networks and hazard maps to enhance the organization's logistical and emergency readiness.",
        work: "Completed data gathering (roads, schools, bridges, hazard maps, etc.)",
        problem:
          "Making sure that all the data we encode on the fact book is validated and working.",
      },
      {
        obj: "Designed and edited high-impact flyers to drive engagement for Mobile Blood Donation campaigns under the direction of the team lead.",
        work: "Successfully created and edited flyers assigned by Sir Ado.",
        problem: "None",
      },
      {
        obj: "Applied practical emergency skills by assisting with and auditing bandaging techniques during live events.",
        work: "Created the standee tarpaulin design.",
        problem: "None",
      },
      {
        obj: "Streamlined data integrity and organizational efficiency through high-volume encoding and database management.",
        work: "Assisted and reviewed bandaging procedures.",
        problem: "None",
      },
    ],
  },
  {
    period: "MAR 1 - APR 27, 2026",
    data: [
      {
        obj: "Maintained high-level oversight of medical supplies and equipment to ensure operational readiness at all times.",
        work: "Conducted a comprehensive audit and verification of medical equipment and supplies.",
        problem: "None",
      },
      {
        obj: "Advanced my proficiency in First Aid and CPR while actively participating in the evaluation of trainees.",
        work: "Facilitated bandaging workshops and managed performance evaluation.",
        problem: "None",
      },
      {
        obj: "Transitioned from theory to practice by applying life-saving skills in real-world settings.",
        work: "Stationed at First Aid unit under Sir Harold and Sir Cirillo.",
        problem: "None",
      },
      {
        obj: "Assisted in logistical preparation of blood donation sites.",
        work: "Created standee tarpaulin design.",
        problem: "None",
      },
      {
        obj: "Provided immediate first aid response during community events.",
        work: "Provided on-site first aid assistance and coordinated care.",
        problem: "None",
      },
      {
        obj: "Contributed to successful Mobile Blood Donation drives.",
        work: "Assisted in execution of community activity.",
        problem: "None",
      },
      {
        obj: "Managed systematic archiving and filing of sensitive records.",
        work: "Sorted and archived organizational files for data accessibility.",
        problem: "None",
      },
    ],
  },
];

export default function WeeklyReports() {
  return (
    <PageShell
      eyebrow="III. Work Experiences"
      title="Weekly Accomplishment Report"
      description="Formal weekly documentation of internship activities."
    >
      <div className="space-y-10">
        {/* Header Info */}
        <Card className="p-5 text-sm leading-relaxed">
          <p>
            <b>Name:</b> Ivery Abegail M. Policarpio
          </p>
          <p>
            <b>Date:</b> April 26, 2026
          </p>
          <p>
            <b>Internship Site:</b> Philippine Red Cross Occidental Mindoro
            Chapter
          </p>
          <p>
            <b>Location:</b> Del Pilar St., Brgy. 7, San Jose, Occidental
            Mindoro
          </p>
          <p>
            <b>Hours Completed:</b> 494 Hours
          </p>
        </Card>

        {reports.map((report, i) => (
          <Card key={i} className="p-5 space-y-4">
            {/* Period Header */}
            <div className="font-semibold text-primary">
              From: {report.period}
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-3 font-semibold border-b pb-2">
              <div>Objectives</div>
              <div>Work Status</div>
              <div>Problems Met</div>
            </div>

            {/* Table Rows */}
            {report.data.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-3 gap-4 text-sm border-b py-3"
              >
                <div>{row.obj}</div>
                <div>{row.work}</div>
                <div>{row.problem}</div>
              </div>
            ))}

            <div className="flex justify-end">
              <Badge variant="secondary">Completed</Badge>
            </div>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
