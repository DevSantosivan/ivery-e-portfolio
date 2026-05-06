import { useEffect, useState } from "react";
import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/card";
import {
  FileText,
  ClipboardList,
  Award,
  FileSignature,
  X,
  Camera,
  ImageIcon,
} from "lucide-react";

/* IMAGES */
import evaluationform from "@/assets/Appendix/A-EvaluationForm.jpg";
import registrationform from "@/assets/Appendix/B-RegistrationForm.jpg";
import validatedid from "@/assets/Appendix/C-ValidID.jpg";
import parentsconsent from "@/assets/Appendix/D-ParentsConsent.jpg";

import medicalcertificate from "@/assets/Appendix/e-medical/Messenger_creation_0DAD8DAA-BEC8-4450-A4B6-A958A83124C2.jpeg";
import medicalcertificate1 from "@/assets/Appendix/e-medical/Messenger_creation_7823C0C1-FA57-4AF9-8574-50F40A906FE9.jpeg";

import goodmoral from "@/assets/Appendix/F-CertificateofGoodMoral.jpg";
import applicationletter from "@/assets/Appendix/Vision.jpg";
import endorsementletter from "@/assets/Appendix/H-EndorsementLetter.jpg";

import certificateofclearance from "@/assets/Appendix/CertificateofClearance.jpg";
import certificateofcompletion from "@/assets/Appendix/CertificateofCompletion.jpg";

/* MOA */
import moa1 from "@/assets/Appendix/i-moa/1.jpeg";
import moa2 from "@/assets/Appendix/i-moa/2.jpeg";
import moa3 from "@/assets/Appendix/i-moa/3.jpeg";
import moa4 from "@/assets/Appendix/i-moa/4.jpeg";

/* DTR (NOTE: mukhang placeholder pa 'to) */
import dtr1 from "@/assets/DTR/1.jpg";
import dtr2 from "@/assets/DTR/2.jpg";
import dtr3 from "@/assets/DTR/3.jpg";
import dtr4 from "@/assets/DTR/4.jpg";

/* PRE-SEMINAR */
import preSeminar1 from "@/assets/Appendix/n-picture-during-seminar/1.png";
import preSeminar2 from "@/assets/Appendix/n-picture-during-seminar/2.png";
import preSeminar3 from "@/assets/Appendix/n-picture-during-seminar/3.png";
import preSeminar4 from "@/assets/Appendix/n-picture-during-seminar/4.png";

/* OFFICE WORK */
import officeWork1 from "@/assets/Appendix/o-picture-during-work/1.jpg";
import officeWork2 from "@/assets/Appendix/o-picture-during-work/2.jpg";
import officeWork3 from "@/assets/Appendix/o-picture-during-work/3.jpg";
import officeWork4 from "@/assets/Appendix/o-picture-during-work/4.jpg";
import officeWork5 from "@/assets/Appendix/o-picture-during-work/5.png";
import officeWork6 from "@/assets/Appendix/o-picture-during-work/6.jpeg";
import officeWork7 from "@/assets/Appendix/o-picture-during-work/7.jpeg";
import officeWork8 from "@/assets/Appendix/o-picture-during-work/8.jpeg";
import officeWork9 from "@/assets/Appendix/o-picture-during-work/9.jpeg";
import officeWork10 from "@/assets/Appendix/o-picture-during-work/10.jpeg";
import officeWork11 from "@/assets/Appendix/o-picture-during-work/11.jpeg";
import officeWork12 from "@/assets/Appendix/o-picture-during-work/12.jpeg";
import officeWork13 from "@/assets/Appendix/o-picture-during-work/13.jpeg";
import officeWork14 from "@/assets/Appendix/o-picture-during-work/14.jpeg";
import officeWork15 from "@/assets/Appendix/o-picture-during-work/15.jpeg";
import officeWork16 from "@/assets/Appendix/o-picture-during-work/16.jpeg";
import officeWork17 from "@/assets/Appendix/o-picture-during-work/17.jpeg";

const appendices = [
  {
    id: "A",
    title: "Evaluation Form",
    icon: FileText,
    images: [evaluationform],
  },
  {
    id: "B",
    title: "Photocopy Registration Form",
    icon: FileSignature,
    images: [registrationform],
  },
  {
    id: "C",
    title: "Photocopy Validated ID",
    icon: ClipboardList,
    images: [validatedid],
  },

  {
    id: "D",
    title: "Parent's Consent",
    icon: FileText,
    images: [parentsconsent],
  },
  {
    id: "E",
    title: "Medical Certificate",
    icon: FileText,
    images: [medicalcertificate, medicalcertificate1],
  },

  {
    id: "F",
    title: "Certificate of Good Moral Character ",
    icon: Award,
    images: [goodmoral],
  },
  {
    id: "G",
    title: "Application Letter",
    icon: FileText,
    images: [applicationletter],
  },

  {
    id: "H",
    title: "Endorsement Letter",
    icon: FileText,
    images: [endorsementletter],
  },

  {
    id: "I",
    title: "Memorandum of Agreement",
    icon: FileSignature,
    images: [moa1, moa2, moa3, moa4],
  },

  {
    id: "J",
    title: "Daily Time Record (Time Card)",
    icon: ClipboardList,
    images: [dtr1, dtr2, dtr3, dtr4],
  },

  {
    id: "K",
    title: "Certificate of Completion",
    icon: Award,
    images: [certificateofcompletion],
  },
  {
    id: "L",
    title: "Certificate of Clearance",
    icon: Award,
    images: [certificateofclearance],
  },

  {
    id: "M",
    title: "Pictures during Pre-service Seminar",
    icon: Camera,
    images: [preSeminar1, preSeminar2, preSeminar3, preSeminar4],
  },
  {
    id: "N",
    title: "Pictures during Office Works",
    icon: ImageIcon,
    images: [
      officeWork1,
      officeWork2,
      officeWork3,
      officeWork4,
      officeWork5,
      officeWork6,
      officeWork7,
      officeWork8,
      officeWork9,
      officeWork10,
      officeWork11,
      officeWork12,
      officeWork13,
      officeWork14,
      officeWork15,
      officeWork16,
      officeWork17,
    ],
  },

  {
    id: "O",
    title: "Code of Ethics for CAST Student Internship",
    icon: FileText,
    images: [officeWork1],
  },

  { id: "P", title: "Curriculum Vitae", icon: FileText, images: [officeWork2] },

  {
    id: "Q",
    title: "On-the-Job Training Portfolio Evaluation Form",
    icon: ClipboardList,
    images: [officeWork3],
  },
];

export default function Appendices() {
  const [images, setImages] = useState<string[] | null>(null);
  const [index, setIndex] = useState(0);

  const open = (imgs: string[]) => {
    setImages(imgs);
    setIndex(0);
  };

  const close = () => setImages(null);

  const next = () => {
    if (!images) return;
    setIndex((p) => (p + 1) % images.length);
  };

  const prev = () => {
    if (!images) return;
    setIndex((p) => (p === 0 ? images.length - 1 : p - 1));
  };

  /* 🔥 keyboard + scroll lock */
  useEffect(() => {
    if (!images) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [images]);

  return (
    <PageShell
      eyebrow="V. Appendices"
      title="Appendices"
      description="Supporting documents and visual evidence from the internship."
    >
      {/* GRID */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {appendices.map((a) => (
          <Card
            key={a.id}
            onClick={() => open(a.images)}
            className="
    group cursor-pointer p-5
    transition-all duration-300
    hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]
  "
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent group-hover:bg-primary transition">
              <a.icon className="h-5 w-5 text-accent-foreground group-hover:text-primary-foreground" />
            </div>

            {/* TITLE SECTION (ENHANCED) */}
            <div className="mt-4">
              <h3 className="font-semibold text-base group-hover:text-primary transition">
                Appendix {a.id}
              </h3>

              <p className="text-sm text-muted-foreground font-medium">
                {a.title}
              </p>
            </div>

            <p className="text-xs text-muted-foreground mt-2">
              Click to view {a.images.length} image(s)
            </p>
          </Card>
        ))}
      </div>

      {/* MODAL */}
      {images && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={close} // click outside closes
        >
          {/* CLOSE BUTTON */}
          <button onClick={close} className="absolute top-5 right-5 text-white">
            <X size={28} />
          </button>

          {/* IMAGE CONTAINER */}
          <div
            className="relative flex items-center justify-center w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking image
          >
            {/* PREV */}
            {images.length > 1 && (
              <button
                onClick={prev}
                className="absolute left-4 text-white text-4xl"
              >
                ‹
              </button>
            )}

            {/* IMAGE */}
            <img
              src={images[index]}
              className="max-h-[80vh] rounded-lg shadow-2xl transition-all duration-300"
            />

            {/* NEXT */}
            {images.length > 1 && (
              <button
                onClick={next}
                className="absolute right-4 text-white text-4xl"
              >
                ›
              </button>
            )}
          </div>

          {/* DOTS */}
          {images.length > 1 && (
            <div className="absolute bottom-6 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    i === index ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </PageShell>
  );
}
