import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/card";

/* ORGANIZATION IMAGE */
import orgChart from "@/assets/org.png";

export default function CompanyOrganization() {
  return (
    <PageShell
      eyebrow="II. Company Profile"
      title="Organization"
      description="Leadership and structure of the Philippine Red Cross."
    >
      <div className="space-y-8">
        {/* ORG IMAGE */}
        <Card className="overflow-hidden p-0">
          <div className="relative bg-muted">
            {/* IMAGE */}
            <img
              src={orgChart}
              alt="Organization Structure"
              className="w-full object-cover grayscale-[40%] opacity-95 contrast-90"
            />

            {/* GRAY OVERLAY */}
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </Card>

        {/* DESCRIPTION */}
        <Card className="p-6">
          <h3 className="font-semibold">My Placement</h3>

          <p className="mt-2 text-sm text-muted-foreground">
            I was assigned under the{" "}
            <span className="font-medium text-foreground">
              Information Technology Department
            </span>
            , reporting to the IT Manager and collaborating closely with system
            administrators and the support team.
          </p>
        </Card>
      </div>
    </PageShell>
  );
}
