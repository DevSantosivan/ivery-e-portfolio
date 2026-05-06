import { Heart } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/30 px-6 py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground">
            <Heart className="h-4 w-4" fill="currentColor" />
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-foreground">
              Philippine Red Cross
            </p>
            <p className="text-xs">Always First, Always Ready, Always There</p>
          </div>
        </div>
        <p className="text-xs">
          © {new Date().getFullYear()} Ivery Abegail Policarpio · IT Internship
          E-Portfolio
        </p>
      </div>
    </footer>
  );
}
