import { useState } from "react";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Eye, X, Star } from "lucide-react";

/* IMAGES */
import img1 from "@/assets/eva1.png";
import img2 from "@/assets/eva2.png";
import img3 from "@/assets/eva3.png";
import img4 from "@/assets/eva4.png";
import { PageShell } from "@/components/PageShell";

/* SCORES */
const sr = 283;
const pr = 285;
const sicr = 0;
const asr = 285;

const scores = [
  { label: "SR (Student Self Rating)", value: sr },
  { label: "PR (Peer Rating)", value: pr },
  { label: "SICR (Student Internship Coordinator Rating)", value: sicr },
  { label: "ASR (Agency Supervisor Rating)", value: asr },
];

export default function AssessmentPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const maxScore = 285;

  const totalScore = scores.reduce((a, b) => a + b.value, 0);
  const maxTotal = maxScore * scores.length;
  const finalRating = (totalScore / maxTotal) * 100;

  const images = [
    { title: "Assessment Form Page 1", img: img1 },
    { title: "Assessment Form Page 2", img: img2 },
    { title: "Assessment Form Page 3", img: img3 },
    { title: "Assessment Form Page 4", img: img4 },
  ];

  return (
    <PageShell
      eyebrow="IV. Assessment"
      title="Internship Assessment"
      description="Evaluation summary based on SR, PR, SICR, and ASR performance ratings and supervisor feedback."
    >
      {/* HEADER */}
      <section className="rounded-2xl border bg-card p-6 md:p-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Internship Evaluation
        </span>

        <h2 className="mt-2 text-3xl md:text-4xl font-bold">
          Student Internship Assessment
        </h2>

        <p className="mt-4 text-sm text-muted-foreground max-w-3xl leading-relaxed">
          This section presents a structured evaluation of internship
          performance including SR, PR, SICR, and ASR ratings, along with
          overall competency assessment and documented outputs.
        </p>
      </section>

      {/* IMAGE SECTION */}
      {/* IMAGE SECTION */}
      <section className="mt-8">
        <h3 className="font-semibold mb-4">Performance Evaluation</h3>

        <div className="grid gap-6 md:grid-cols-2">
          {images.map((img, i) => (
            <Card
              key={i}
              onClick={() => setSelectedImage(img.img)}
              className="cursor-pointer overflow-hidden hover:shadow-xl transition group"
            >
              {/* IMAGE - FULL VIEW (NO CROP) */}
              <div className="h-[500px] flex items-center justify-center bg-muted p-2">
                <img
                  src={img.img}
                  alt={img.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* TITLE */}
              <div className="p-4 flex justify-between items-center">
                <p className="text-sm font-medium">{img.title}</p>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-red-400"
            >
              <X size={30} />
            </button>

            <img
              src={selectedImage}
              className="w-full max-h-[90vh] object-contain rounded-xl bg-white"
            />
          </div>
        </div>
      )}

      {/* MAIN */}
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* LEFT */}
        <Card className="p-6">
          <h3 className="font-semibold">Performance Breakdown</h3>

          <div className="mt-5 space-y-4">
            {scores.map((s) => (
              <div key={s.label}>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{s.label}</span>
                  <span className="text-muted-foreground">
                    {s.value} / {maxScore}
                  </span>
                </div>

                <Progress
                  value={(s.value / maxScore) * 100}
                  className="mt-2 h-2"
                />
              </div>
            ))}
          </div>
        </Card>

        {/* RIGHT */}
        <div className="space-y-4">
          <Card className="p-6 border bg-muted/30">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Overall Rating
            </p>

            <p className="mt-2 text-5xl font-bold text-primary">
              {finalRating.toFixed(1)}%
            </p>

            <div className="mt-3 flex gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4" fill="currentColor" />
              ))}
            </div>

            <p className="mt-2 text-sm text-muted-foreground">
              Outstanding Performance
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold">Summary</h3>

            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              {scores.map((s) => (
                <div key={s.label} className="flex justify-between">
                  <span>{s.label}</span>
                  <span className="font-medium text-foreground">
                    {s.value}/{maxScore}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}
