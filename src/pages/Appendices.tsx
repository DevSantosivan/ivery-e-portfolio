import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/card";
import { FileText, Image as ImageIcon, ClipboardList, Award, FileSignature, Camera } from "lucide-react";

const docs = [
  { icon: FileText, title: "Endorsement Letter", desc: "From the school OJT coordinator." },
  { icon: FileSignature, title: "MOA / Internship Agreement", desc: "Signed agreement between the school and PRC." },
  { icon: ClipboardList, title: "Daily Time Record", desc: "Compiled DTR pages with supervisor signatures." },
  { icon: Award, title: "Certificate of Completion", desc: "Issued by the Philippine Red Cross IT Department." },
  { icon: Camera, title: "Photo Documentation", desc: "Selected on-site photos from internship activities." },
  { icon: ImageIcon, title: "Project Screenshots", desc: "Snapshots of internal tools contributed to." },
];

export default function Appendices() {
  return (
    <PageShell eyebrow="V. Appendices" title="Appendices" description="Supporting documents and visual evidence from the internship.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {docs.map((d) => (
          <Card key={d.title} className="group p-5 transition-all hover:-translate-y-0.5 hover:shadow-soft cursor-pointer">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <d.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">{d.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{d.desc}</p>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
