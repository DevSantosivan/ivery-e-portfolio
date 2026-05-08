import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/card";

/* DTR IMAGES */
import dtr1 from "@/assets/DTR/1.jpg";
import dtr2 from "@/assets/DTR/2.jpg";
import dtr3 from "@/assets/DTR/3.jpg";
import dtr4 from "@/assets/DTR/4.jpg";
import dtr5 from "@/assets/DTR/5.jpg";
import dtr6 from "@/assets/DTR/6.jpg";

const dtrImages = [
  {
    image: dtr1,
    title: "Daily Time Record - Page 1",
  },
  {
    image: dtr2,
    title: "Daily Time Record - Page 2",
  },
  {
    image: dtr3,
    title: "Daily Time Record - Page 3",
  },
  {
    image: dtr4,
    title: "Daily Time Record - Page 3",
  },
  {
    image: dtr5,
    title: "Daily Time Record - Page 3",
  },
  {
    image: dtr6,
    title: "Daily Time Record - Page 3",
  },
];

export default function DailyTimeRecord() {
  return (
    <PageShell
      eyebrow="III. Work Experiences"
      title="Daily Time Record"
      description="Official attendance and internship time record documentation."
    >
      <div className="space-y-8">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-2xl border bg-card">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent" />

          <div className="relative p-6 md:p-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
              Internship Attendance
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-black">
              Daily Time Record
            </h2>

            <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">
              The following images present the official Daily Time Record (DTR)
              documenting attendance, rendered hours, and internship completion
              throughout the training period at the Philippine Red Cross –
              Occidental Mindoro Chapter.
            </p>
          </div>
        </section>

        {/* DTR IMAGES */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {dtrImages.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border bg-card hover:shadow-2xl transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* TITLE */}
              <div className="p-4">
                <h3 className="font-semibold text-sm md:text-base">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs text-muted-foreground">
                  Official internship attendance documentation.
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* SUMMARY CARDS */}
        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="relative overflow-hidden border bg-card p-5">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />

            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Total Logged
              </p>

              <h3 className="mt-2 text-3xl font-black">486 hrs</h3>

              <p className="mt-1 text-sm text-muted-foreground">
                Total internship hours rendered and documented.
              </p>
            </div>
          </Card>

          <Card className="relative overflow-hidden border bg-card p-5">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />

            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Required Hours
              </p>

              <h3 className="mt-2 text-3xl font-black">486 hrs</h3>

              <p className="mt-1 text-sm text-muted-foreground">
                Required internship hours for completion.
              </p>
            </div>
          </Card>

          <Card className="relative overflow-hidden border bg-card p-5">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />

            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Completion Status
              </p>

              <h3 className="mt-2 text-3xl font-black text-primary">100%</h3>

              <p className="mt-1 text-sm text-muted-foreground">
                Internship requirements successfully completed.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}
