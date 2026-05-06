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
  HeartHandshake,
  List,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profile from "@/assets/profile.png";
import omscbg from "@/assets/omsc-bg.jpg";

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
      <Card className="relative overflow-hidden border-0 text-primary-foreground shadow-soft md:p-12 animate-slide-up">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <img
            src={omscbg}
            alt="background"
            className="h-full w-full object-cover"
          />
          {/* DARK OVERLAY (important para readable text) */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* DECORATIVE BLUR */}
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-black/20 blur-3xl" />

        {/* CONTENT */}
        <div className="relative grid gap-8 md:grid-cols-[auto_1fr] md:items-center p-8">
          <div className="relative mx-auto h-36 w-36 shrink-0 overflow-hidden rounded-2xl ring-4 ring-white/30 md:mx-0 md:h-44 md:w-44">
            <img
              src={profile}
              alt="Ivery Abegail Policarpio"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <Badge className="mb-3 border-white/30 bg-white/15 text-white hover:bg-white/20">
              <Heart className="mr-1 h-3 w-3" fill="currentColor" /> Philippine
              Red Cross
            </Badge>

            <h1 className="text-3xl font-bold font-display md:text-5xl">
              Ivery Abegail Policarpio
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
      <section className="mt-16">
        <Card className="relative overflow-hidden p-6 md:p-8 shadow-soft">
          {/* background accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />

          <div className="relative">
            {/* TITLE INSIDE CARD */}
            <h2 className="flex items-center gap-2 text-2xl font-bold font-display mb-5">
              <HeartHandshake className="h-6 w-6 text-primary" />
              Acknowledgement
            </h2>

            <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                I would like to express my deepest gratitude to the following
                individuals and organizations who supported and guided me
                throughout the successful completion of my On-the-Job Training.
              </p>

              <p>
                First and foremost, I thank the{" "}
                <span className="font-semibold text-foreground">
                  Almighty God
                </span>{" "}
                for granting me the wisdom, strength, and perseverance required
                to navigate this journey.
              </p>

              <p>
                I extend my heartfelt appreciation to the{" "}
                <span className="font-semibold text-foreground">
                  Philippine Red Cross Occidental Mindoro Chapter
                </span>{" "}
                for welcoming me and sharing their expertise.
              </p>

              <p>
                A special thank you to my{" "}
                <span className="font-semibold text-foreground">
                  Site Supervisor
                </span>{" "}
                for continuous guidance and valuable feedback.
              </p>

              <p>
                Sincere thanks to{" "}
                <span className="font-semibold text-foreground">
                  Ma’am Marites D. Escultor
                </span>
                , my OJT Coordinator, for her support and guidance.
              </p>

              <p>
                I am also grateful to my instructors and school for the academic
                foundation that helped me reach this milestone.
              </p>

              <p>
                To my{" "}
                <span className="font-semibold text-foreground">OJT peers</span>
                , thank you for the teamwork and support throughout the
                training.
              </p>

              <p>
                Finally, to my{" "}
                <span className="font-semibold text-foreground">
                  family and partner
                </span>
                , thank you for your unconditional love and inspiration.
              </p>

              <p className="pt-2 font-medium text-primary">
                To everyone who contributed to this journey—thank you sincerely.
              </p>
            </div>
          </div>
        </Card>
      </section>
      <section className="mt-16">
        <Card className="mt-4 p-6 shadow-soft">
          <div className="text-sm leading-relaxed text-muted-foreground space-y-4">
            {/* TITLE INSIDE CARD */}
            <h2 className="flex items-center gap-2 text-2xl font-bold font-display mb-5">
              <List className="h-6 w-6 text-primary" />
              Table of Contents
            </h2>

            {/* FRONT MATTER */}
            <div>
              <p className="font-semibold text-foreground">Front Matter</p>
              <ul className="ml-4 mt-2 space-y-1">
                <li>• Title Page</li>
                <li>• Acknowledgement</li>
                <li>• Table of Contents</li>
                <li>• Student Trainee Prayer</li>
                <li>• Personal Philosophy</li>
                <li>• Career Plan</li>
              </ul>
            </div>

            {/* CHAPTER I */}
            <div>
              <p className="font-semibold text-foreground">
                CHAPTER I: INTRODUCTION
              </p>
              <ul className="ml-4 mt-2 space-y-1">
                <li>A. Importance of Internship</li>
                <li>B. Objectives of Internship</li>
                <li>C. Time and Place of the Internship</li>
              </ul>
            </div>

            {/* CHAPTER II */}
            <div>
              <p className="font-semibold text-foreground">
                CHAPTER II: COMPANY PROFILE
              </p>
              <ul className="ml-4 mt-2 space-y-1">
                <li>1. Nature of the Agency</li>
                <li>2. Mission / Vision / Goal Statement</li>
                <li>
                  3. History / Background of the Agency/Office with pictures
                </li>
                <li>4. Organizational Structure</li>
              </ul>
            </div>

            {/* CHAPTER III */}
            <div>
              <p className="font-semibold text-foreground">
                CHAPTER III: WORK EXPERIENCES
              </p>
              <ul className="ml-4 mt-2 space-y-1">
                <li>1. Weekly Accomplishment Report</li>
                <li>2. Daily Time Record</li>
                <li>3. Internship Progress Report</li>
                <li>4. Internship Analysis Report</li>
              </ul>
            </div>

            {/* CHAPTER IV */}
            <div>
              <p className="font-semibold text-foreground">
                CHAPTER IV: ASSESSMENT OF THE PRACTICUM PROGRAM
              </p>
              <ul className="ml-4 mt-2 space-y-1">
                <li>1. Student Internship Evaluation Form</li>
              </ul>
            </div>

            {/* APPENDICES */}
            <div>
              <p className="font-semibold text-foreground">APPENDICES</p>
              <ul className="ml-4 mt-2 space-y-1">
                <li>Appendix A: Evaluation Form</li>
                <li>Appendix B: Photocopy Registration Form</li>
                <li>Appendix C: Photocopy Validated ID</li>
                <li>Appendix D: Parent’s Consent</li>
                <li>Appendix E: Medical Certificate</li>
                <li>Appendix F: Certificate of Good Moral Character</li>
                <li>Appendix G: Application Letter</li>
                <li>Appendix H: Endorsement Letter</li>
                <li>Appendix I: Memorandum of Agreement</li>
                <li>Appendix J: Daily Time Record</li>
                <li>Appendix K: Certificate of Completion</li>
                <li>Appendix L: Certificate of Clearance</li>
                <li>Appendix M: Performance / Proficiency Rating Sheet</li>
                <li>Appendix N: Pictures during Pre-service Seminar</li>
                <li>Appendix O: Picture during Office Work</li>
                <li>Appendix P: Code of Ethics for CAST Student Internship</li>
                <li>Appendix Q: Curriculum Vitae</li>
                <li>Appendix R: OJT Portfolio Evaluation Form</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>
      {/* Student Trainee Prayer */}
      <section className="mt-12">
        <Card className="relative overflow-hidden p-6 md:p-8 shadow-soft">
          {/* subtle background accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />

          <div className="relative">
            <div className="flex items-center gap-2 text-primary">
              <Heart className="h-5 w-5" />
              <h2 className="text-xl font-bold font-display">
                Student Trainee’s Prayer
              </h2>
            </div>

            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>Heavenly Father,</p>

              <p>
                With a humble and grateful heart, I come before You as I
                navigate this important journey. Thank You for the strength,
                knowledge, and opportunity that have brought me to this stage of
                my education.
              </p>

              <p>
                As I undergo my On-the-Job Training, I ask for Your divine
                guidance in every task I perform. Grant me the discipline to
                fulfill my responsibilities with honesty and the dedication to
                always give my best effort.
              </p>

              <p>
                Grant me the patience to learn and the humility to listen. When
                I encounter challenges or unfamiliar territory, remind me that
                every difficulty is an opportunity to grow. Give me the courage
                to face my fears and the steady confidence to believe in the
                abilities You have given me.
              </p>

              <p>
                Bless those around me, my supervisors, mentors, and co-workers.
                Help me to respect their wisdom, learn from their experience,
                and contribute to a harmonious and professional workplace. May
                my actions reflect kindness, cooperation, and integrity.
              </p>

              <p>
                I also offer my deepest gratitude for my family. Their love and
                sacrifices are the foundation of my perseverance. May my hard
                work make them proud and honor the support they have so freely
                given.
              </p>

              <p>
                Lord, I entrust my future to You, knowing You have a plan for my
                life. May this experience refine my skills, sharpen my
                character, and lead me closer to the dreams I am working so hard
                to achieve.
              </p>

              <p className="font-semibold text-primary pt-2">AMEN</p>
            </div>
          </div>
        </Card>
      </section>

      <section className="mt-16">
        <Card className="relative overflow-hidden p-6 md:p-8 shadow-soft">
          {/* subtle background accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />

          <div className="relative">
            {/* TITLE INSIDE CARD */}
            <h2 className="flex items-center gap-2 text-2xl font-bold font-display mb-5">
              <Sparkles className="h-6 w-6 text-primary" />
              My Philosophy
            </h2>

            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                My personal philosophy is built on the belief that we are all
                works in progress, called to a life of constant self-improvement
                and discovery.
              </p>

              <p>
                I believe that education is the most powerful tool we have—not
                just for professional advancement, but for the shaping of a
                person’s character. It teaches us how to stand tall in the face
                of adversity and how to carry our responsibilities with purpose.
              </p>

              <p>
                I have come to cherish every chapter of my story, understanding
                that difficult moments are often the ones that yield the most
                growth. They have taught me that resilience is born from
                struggle and that patience allows us to overcome obstacles. To
                me, a mistake is simply an invitation to grow wiser and try
                again.
              </p>

              <p>
                I strive to live a life anchored in values such as integrity and
                responsibility. These principles serve as my foundation,
                especially when I am tested in real-world environments. I
                understand that reaching one’s full potential requires not only
                talent, but also perseverance and humility.
              </p>

              <p className="pt-2 font-medium text-primary">
                My goal as I transition from student trainee to professional is
                to become a person of substance—someone whose work, character,
                and dedication become a source of inspiration and positive
                change in society.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="mt-16">
        <Card className="relative overflow-hidden p-6 md:p-8 shadow-soft">
          {/* background accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />

          <div className="relative">
            {/* TITLE */}
            <h2 className="flex items-center gap-2 text-2xl font-bold font-display mb-6">
              <Sparkles className="h-6 w-6 text-primary" />
              Career Plan
            </h2>

            {/* GRID LAYOUT */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {/* 1 */}
              <div className="rounded-2xl p-4 border bg-white/70 backdrop-blur shadow-sm hover:shadow-md transition">
                <p className="font-semibold text-primary">1. Self-Assessment</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Reflect on values, skills, and interests.
                </p>
              </div>

              {/* 2 */}
              <div className="rounded-2xl p-4 border bg-white/70 backdrop-blur shadow-sm hover:shadow-md transition">
                <p className="font-semibold text-primary">2. Exploration</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Explore career paths, industries, and education options.
                </p>
              </div>

              {/* 3 */}
              <div className="rounded-2xl p-4 border bg-white/70 backdrop-blur shadow-sm hover:shadow-md transition">
                <p className="font-semibold text-primary">3. Goal Setting</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Define short-term and long-term career goals.
                </p>
              </div>

              {/* 4 */}
              <div className="rounded-2xl p-4 border bg-white/70 backdrop-blur shadow-sm hover:shadow-md transition">
                <p className="font-semibold text-primary">
                  4. Skill Development
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Develop necessary skills, acquire training, and experience.
                </p>
              </div>

              {/* 5 */}
              <div className="rounded-2xl p-4 border bg-white/70 backdrop-blur shadow-sm hover:shadow-md transition">
                <p className="font-semibold text-primary">5. Networking</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Build professional relationships and seek opportunities.
                </p>
              </div>

              {/* 6 */}
              <div className="rounded-2xl p-4 border bg-white/70 backdrop-blur shadow-sm hover:shadow-md transition">
                <p className="font-semibold text-primary">
                  6. Action & Adaptation
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Execute plan, gain experience, monitor progress, and refine.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
