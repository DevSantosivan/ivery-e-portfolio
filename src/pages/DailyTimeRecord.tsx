import { PageShell } from "@/components/PageShell";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const sample = Array.from({ length: 10 }).map((_, i) => {
  const day = i + 15;
  return {
    date: `Jan ${day}, 2026`,
    in: "08:02 AM",
    out: "05:04 PM",
    hours: "8.0",
    notes: i % 3 === 0 ? "On-site" : "Remote",
  };
});

export default function DailyTimeRecord() {
  return (
    <PageShell eyebrow="III. Work Experiences" title="Daily Time Record" description="Sample week of attendance during the internship.">
      <Card className="overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Time In</TableHead>
              <TableHead>Time Out</TableHead>
              <TableHead className="text-right">Hours</TableHead>
              <TableHead>Notes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sample.map((r) => (
              <TableRow key={r.date}>
                <TableCell className="font-medium">{r.date}</TableCell>
                <TableCell>{r.in}</TableCell>
                <TableCell>{r.out}</TableCell>
                <TableCell className="text-right font-mono">{r.hours}</TableCell>
                <TableCell className="text-muted-foreground">{r.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <Card className="p-5">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Total Logged</p>
          <p className="mt-1 text-2xl font-bold">486 hrs</p>
        </Card>
        <Card className="p-5">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Required</p>
          <p className="mt-1 text-2xl font-bold">486 hrs</p>
        </Card>
        <Card className="p-5">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Completion</p>
          <p className="mt-1 text-2xl font-bold text-primary">100%</p>
        </Card>
      </div>
    </PageShell>
  );
}
