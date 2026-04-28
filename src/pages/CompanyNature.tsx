import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CompanyNature() {
  return (
    <PageShell
      eyebrow="II. Company Profile"
      title="Nature of the Company"
      description="A non-profit humanitarian organization auxiliary to the public authorities."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="p-6 lg:col-span-2">
          <p className="text-muted-foreground leading-relaxed">
            The Philippine Red Cross (PRC) is the country's foremost humanitarian organization, mandated by Republic Act
            No. 10072 to provide volunteer-led, neutral, and impartial humanitarian services to all Filipinos. It
            operates as the Philippine member of the International Red Cross and Red Crescent Movement.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            PRC's work spans disaster response, blood services, safety services, health programs, welfare, and
            community-based humanitarian action. Behind every humanitarian touchpoint is a network of staff, volunteers,
            and digital systems that keep operations running.
          </p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold">At a Glance</h3>
          <div className="mt-4 space-y-3 text-sm">
            <div>
              <p className="text-muted-foreground">Sector</p>
              <p className="font-medium">Non-profit Humanitarian</p>
            </div>
            <div>
              <p className="text-muted-foreground">Founded</p>
              <p className="font-medium">April 15, 1947</p>
            </div>
            <div>
              <p className="text-muted-foreground">Chapters</p>
              <p className="font-medium">100+ nationwide</p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2">
              <Badge variant="secondary">Humanitarian</Badge>
              <Badge variant="secondary">Volunteer-led</Badge>
              <Badge variant="secondary">Neutral</Badge>
            </div>
          </div>
        </Card>
      </div>
    </PageShell>
  );
}
