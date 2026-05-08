import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/card";
import { Building2, UserRound, Globe, Sparkles } from "lucide-react";

const analysisSections = [
  {
    icon: Building2,
    title: "1. Setting",
    color: "text-muted-foreground",
    content: [
      {
        subtitle: "The setting was good because…",
        text: "It offered a rare look at the intersection of public health and community service. Being immersed in an environment dedicated to blood services meant that every task felt like it had a direct, life-saving purpose.",
      },
      {
        subtitle: "The setting was limited by…",
        text: "The office sometimes lacked manpower, causing administrative tasks and office operations to become delayed during busy schedules and field activities.",
      },
      {
        subtitle: "Initial analysis of the organization…",
        text: "The agency initially appeared highly structured and clinical, but eventually revealed itself as a community-centered organization heavily dependent on public trust, volunteers, and humanitarian relationships.",
      },
    ],
  },
  {
    icon: UserRound,
    title: "2. Site Supervisor",
    color: "text-muted-foreground",
    content: [
      {
        subtitle: "Greatest contribution of the supervisor…",
        text: "The supervisor provided mentorship regarding the “35-day rule” and donor psychology, helping bridge the gap between theoretical knowledge and real-world humanitarian practice.",
      },
      {
        subtitle: "General level of supervision…",
        text: "The supervision was balanced and empowering. Tasks were handled independently while guidance and support remained available for complex concerns and policy-related questions.",
      },
      {
        subtitle: "Needed more from the supervisor in terms of…",
        text: "More formal feedback sessions focused on long-term career growth and development within the humanitarian and healthcare sector.",
      },
    ],
  },
  {
    icon: Globe,
    title: "3. Environmental Conditions or Events",
    color: "text-muted-foreground",
    content: [
      {
        subtitle: "Most influential event…",
        text: "Participation in MRAA 2026 and Holiday Station at Krus na Parang significantly influenced the internship experience by providing real-life emergency response and first aid exposure.",
      },
      {
        subtitle: "Trend or issue impacting the organization…",
        text: "The increasing need to digitize health information systems and move from manual tracking toward automated processes strongly influenced organizational operations.",
      },
      {
        subtitle: "Diversity of co-workers provided an opportunity to…",
        text: "Working alongside the Emergency Response Team (ERT) strengthened communication skills, especially in high-pressure situations requiring clear, calm, and accessible instructions.",
      },
    ],
  },
  {
    icon: Sparkles,
    title: "4. Self-Assessment",
    color: "text-muted-foreground",
    content: [
      {
        subtitle: "Most important lesson learned…",
        text: "Reliability is a form of advocacy. Behind-the-scenes technical and administrative work ensures preparedness during emergencies and supports humanitarian operations.",
      },
      {
        subtitle: "Contribution to the organization…",
        text: "Participated in activities, assisted with office and field tasks, and actively joined volunteer and humanitarian operations.",
      },
      {
        subtitle: "Area needing more experience…",
        text: "Crisis communication and handling emotionally intense situations involving donors, patients, or emergency response operations.",
      },
      {
        subtitle: "If given the chance to repeat the experience…",
        text: "Would volunteer more frequently in different municipalities to gain broader exposure to local community health challenges and humanitarian operations.",
      },
    ],
  },
];

export default function AnalysisReport() {
  return (
    <PageShell
      eyebrow="III. Work Experiences"
      title="Internship Analysis Report"
      description="A reflective analysis of the internship experience, work environment, supervision, and personal growth throughout the internship period."
    >
      <div className="space-y-8">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-2xl border bg-card">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent" />

          <div className="relative p-6 md:p-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
              Internship Reflection
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-black">
              Internship Analysis Report
            </h2>

            <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">
              This analysis report presents reflections, observations, and
              insights gained during the internship at the Philippine Red Cross
              – Occidental Mindoro Chapter.
            </p>
          </div>
        </section>

        {/* INFORMATION CARD */}
        <Card className="relative overflow-hidden border bg-card">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent" />

          <div className="relative p-6 md:p-8">
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

                <h4 className="mt-2 text-base font-semibold">March 1, 2026</h4>
              </div>

              <div className="rounded-2xl border bg-background/60 p-4 md:col-span-2">
                <p className="text-[11px] font-bold uppercase tracking-widest text-primary">
                  Internship Site
                </p>

                <h4 className="mt-2 text-base font-semibold">
                  Philippine Red Cross Occidental Mindoro Chapter
                </h4>

                <p className="mt-2 text-sm text-muted-foreground">
                  Del Pilar St., Brgy. 7, San Jose, Occidental Mindoro
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* ANALYSIS CONTENT */}
        <div className="grid gap-6">
          {analysisSections.map((section, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border bg-card"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-primary" />

              <div className="p-6 md:p-8">
                {/* HEADER */}
                <div className={`flex items-center gap-3 ${section.color}`}>
                  <section.icon className="h-6 w-6" />

                  <h3 className="text-2xl font-bold text-foreground">
                    {section.title}
                  </h3>
                </div>

                {/* CONTENT */}
                <div className="mt-6 space-y-6">
                  {section.content.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border bg-background/50 p-5"
                    >
                      <h4 className="text-sm font-bold uppercase tracking-wider text-primary">
                        {item.subtitle}
                      </h4>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* GENERAL SECTION */}
        <Card className="border-l-4 border-primary bg-primary/5 p-6">
          <h3 className="text-2xl font-bold text-foreground">5. General</h3>

          <div className="mt-6 space-y-5">
            <div className="rounded-2xl border bg-background/50 p-5">
              <h4 className="text-sm font-bold uppercase tracking-wider text-primary">
                The internship experience can be strengthened by…
              </h4>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Connecting specific projects and responsibilities to the broader
                mission of the Emergency Response Team. Technical precision,
                organization, and reliable back-end operations directly support
                responders in saving lives during emergencies.
              </p>
            </div>

            <div className="rounded-2xl border bg-background/50 p-5">
              <h4 className="text-sm font-bold uppercase tracking-wider text-primary">
                Future interns should…
              </h4>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Be prepared for a fast-paced environment where every task,
                whether administrative, technical, or medical, contributes to
                emergency preparedness and humanitarian service delivery.
              </p>
            </div>

            <div className="rounded-xl border border-dashed border-primary/30 bg-background/60 p-4">
              <p className="text-sm italic text-muted-foreground">
                Note: This analysis report need not be shared with the site
                supervisor.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </PageShell>
  );
}
