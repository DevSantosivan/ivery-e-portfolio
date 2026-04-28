import { ReactNode } from "react";

interface PageShellProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function PageShell({ eyebrow, title, description, children }: PageShellProps) {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-8 md:py-12">
      <header className="mb-8 animate-slide-up">
        {eyebrow && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
        )}
        <h1 className="text-3xl font-bold font-display md:text-4xl">{title}</h1>
        {description && <p className="mt-3 max-w-3xl text-muted-foreground md:text-lg">{description}</p>}
      </header>
      <div className="animate-fade-in">{children}</div>
    </div>
  );
}
