import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/card";

const node = "rounded-lg border border-border bg-card p-4 text-center shadow-card";

export default function CompanyOrganization() {
  return (
    <PageShell eyebrow="II. Company Profile" title="Organization" description="Leadership and structure of the Philippine Red Cross.">
      <div className="space-y-6">
        <div className="flex justify-center">
          <div className={`${node} bg-primary text-primary-foreground border-primary w-64`}>
            <p className="text-xs uppercase tracking-wider opacity-80">Chairman & CEO</p>
            <p className="mt-1 font-semibold">Board of Governors</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="h-6 w-px bg-border" />
        </div>
        <div className="flex justify-center">
          <div className={`${node} w-64`}>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Secretary General</p>
            <p className="mt-1 font-semibold">Executive Office</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="h-6 w-px bg-border" />
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {["Operations", "Finance & Admin", "Information Technology", "Communications"].map((d) => (
            <div key={d} className={node}>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Department</p>
              <p className="mt-1 font-semibold">{d}</p>
            </div>
          ))}
        </div>
        <Card className="mt-8 p-6">
          <h3 className="font-semibold">My Placement</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            I was assigned under the <span className="font-medium text-foreground">Information Technology Department</span>,
            reporting to the IT Manager and collaborating closely with system administrators and the support team.
          </p>
        </Card>
      </div>
    </PageShell>
  );
}
