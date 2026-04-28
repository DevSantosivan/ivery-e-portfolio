import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => (
  <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
    <p className="text-sm font-semibold uppercase tracking-widest text-primary">404</p>
    <h1 className="mt-2 text-4xl font-bold font-display">Page not found</h1>
    <p className="mt-3 max-w-md text-muted-foreground">
      The page you're looking for doesn't exist in this E-Portfolio.
    </p>
    <Button asChild className="mt-6">
      <Link to="/">Back to Overview</Link>
    </Button>
  </div>
);

export default NotFound;
