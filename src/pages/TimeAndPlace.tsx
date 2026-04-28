import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/card";
import { CalendarDays, Clock, MapPin, Building2, Sparkles } from "lucide-react";

const items = [
  {
    icon: CalendarDays,
    label: "Duration",
    value: "February 2, 2025 — April 25, 2025",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "8:00 AM – 5:30 PM (Mon–Fri)",
  },
  {
    icon: Building2,
    label: "Role",
    value: "On-the-Job Trainee (OJT)",
  },
  {
    icon: MapPin,
    label: "Total Hours",
    value: "489 Hours Completed",
  },
];

export default function TimeAndPlace() {
  return (
    <PageShell
      eyebrow="I. Introduction"
      title="Time and Place of Internship"
      description="Schedule, duration, and training environment of the internship program."
    >
      {/* HEADER STRIP */}
      <div className="mb-6 rounded-xl border border-border bg-card p-5">
        <div className="flex items-center gap-2 text-primary">
          <Sparkles className="h-5 w-5" />
          <h2 className="font-semibold">Internship Timeline Overview</h2>
        </div>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          This section presents the official schedule, duration, and work
          environment during the internship at the Philippine Red Cross.
        </p>
      </div>

      {/* TOP INFO CARDS */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((i) => (
          <Card
            key={i.label}
            className="group p-6 transition-all hover:shadow-lg hover:border-primary/30"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition">
                <i.icon className="h-6 w-6" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {i.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground leading-snug">
                  {i.value}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* TRAINING ENVIRONMENT */}
      <Card className="mt-8 p-6">
        <h2 className="text-lg font-semibold text-foreground">
          Training Environment
        </h2>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Safety Services",
            "Red Cross 143",
            "Blood Donation Assistance",
            "Gathering Data",
            "Editing Skills",
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-lg border border-border bg-muted/30 p-4 text-sm text-foreground transition hover:bg-muted/50"
            >
              {item}
            </div>
          ))}
        </div>
      </Card>

      {/* OVERVIEW */}
      <Card className="mt-8 p-6 border-primary/20 bg-primary/5">
        <h2 className="text-lg font-semibold text-foreground">
          Internship Overview
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          The internship was conducted from February 2, 2025 to April 25, 2025,
          with a total of 489 working hours following a schedule of 8:00 AM to
          5:30 PM, Monday to Friday.
        </p>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          This experience provided exposure to real-world operations at the
          Philippine Red Cross Occidental Mindoro Chapter, allowing the intern
          to develop discipline, technical understanding, and professional work
          habits beyond academic learning.
        </p>
      </Card>
    </PageShell>
  );
}
