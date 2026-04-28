import {
  Mail,
  FileText,
  Facebook,
  MapPin,
  Building2,
  Briefcase,
  Code2,
  Calendar,
  IdCard,
  Sparkles,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profile from "@/assets/profile.png";

const profileGrid = [
  { icon: Calendar, label: "Age", value: "22 years old" },
  { icon: Building2, label: "Company", value: "Philippine Red Cross" },
  { icon: Briefcase, label: "Role", value: "OJT Trainee" },
  {
    icon: Code2,
    label: "Skills",
    value: "IT Support, Documentation, Editing Skills",
  },
  { icon: MapPin, label: "Location", value: "San Jose, Occidental Mindoro" },
  { icon: IdCard, label: "Student ID", value: "MA22-IT-02604" },
];

const gained = [
  "Hands-on experience building and maintaining internal web tools used by chapter staff.",
  "Real-world exposure to ticketing systems, end-user support, and IT documentation workflows.",
  "Confidence collaborating with non-technical teammates across humanitarian programs.",
  "A clearer career direction in front-end engineering and humanitarian technology.",
];

export default function Overview() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-8 md:py-12">
      {/* Hero */}
      <Card className="relative overflow-hidden border-0 bg-gradient-hero p-8 text-primary-foreground shadow-soft md:p-12 animate-slide-up">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-black/20 blur-3xl" />

        <div className="relative grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
          <div className="relative mx-auto h-36 w-36 shrink-0 overflow-hidden rounded-2xl ring-4 ring-white/30 md:mx-0 md:h-44 md:w-44">
            <img
              src={profile}
              alt="Mark Vincent Roldan"
              className="h-full w-full object-cover"
              width={512}
              height={512}
            />
          </div>

          <div>
            <Badge className="mb-3 border-white/30 bg-white/15 text-white hover:bg-white/20">
              <Heart className="mr-1 h-3 w-3" fill="currentColor" /> Philippine
              Red Cross
            </Badge>
            <h1 className="text-3xl font-bold font-display md:text-5xl">
              Mark Vincent Roldan
            </h1>
            <p className="mt-1 text-lg font-medium text-white/90">
              OJT Trainee — Information Technology
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
              OJT trainee at Philippine Red Cross with experience in IT support,
              documentation, and basic system assistance.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="secondary" className="gap-2">
                <FileText className="h-4 w-4" /> Resume
              </Button>
              <Button variant="secondary" className="gap-2">
                <Mail className="h-4 w-4" /> Email
              </Button>
              <Button variant="secondary" className="gap-2">
                <Facebook className="h-4 w-4" /> Facebook
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Profile Grid */}
      <section className="mt-10">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Profile
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {profileGrid.map((item) => (
            <Card
              key={item.label}
              className="group p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-soft"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold">{item.value}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Introduction */}
      <section className="mt-12 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold font-display">Introduction</h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a fourth-year Information Technology student deployed at the
              Philippine Red Cross as part of my required On-the-Job Training.
              The experience pushed me beyond classroom exercises and into a
              working environment where systems, people, and mission converge.
            </p>
            <p>
              From building small internal tools to assisting with end-user
              support and documentation, every task taught me how technology can
              quietly carry humanitarian work forward — and why reliability,
              clarity, and empathy matter just as much as code.
            </p>
          </div>
        </div>

        <Card className="p-6 shadow-card">
          <div className="flex items-center gap-2 text-primary">
            <Sparkles className="h-5 w-5" />
            <h3 className="font-semibold">What I've Gained</h3>
          </div>
          <ul className="mt-4 space-y-3 text-sm">
            {gained.map((g) => (
              <li key={g} className="flex gap-2 text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>
    </div>
  );
}
