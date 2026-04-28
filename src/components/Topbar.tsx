import { useLocation } from "react-router-dom";
import { Moon, Sun, ChevronDown } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profile from "@/assets/profile.jpg";

const titleMap: Record<string, string> = {
  "/": "Overview",
  "/introduction/importance": "Importance of Internship",
  "/introduction/objectives": "Objectives",
  "/introduction/time-and-place": "Time and Place",
  "/company/nature": "Nature of the Company",
  "/company/mission-vision": "Mission & Vision",
  "/company/history": "History",
  "/company/organization": "Organization",
  "/company/services": "Services",
  "/work/weekly-reports": "Weekly Reports",
  "/work/daily-time-record": "Daily Time Record",
  "/work/progress-report": "Progress Report",
  "/work/analysis-report": "Analysis Report",
  "/assessment": "Assessment",
  "/appendices": "Appendices",
};

export function Topbar() {
  const { pathname } = useLocation();
  const { theme, toggle } = useTheme();
  const title = titleMap[pathname] ?? "E-Portfolio";

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur-md">
      <SidebarTrigger className="md:hidden" />
      <div className="flex flex-1 items-center gap-2 min-w-0">
        <h1 className="truncate text-base font-semibold md:text-lg font-display">{title}</h1>
      </div>

      <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme">
        {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="gap-2 px-2">
            <Avatar className="h-7 w-7">
              <AvatarImage src={profile} alt="Mark Vincent Roldan" />
              <AvatarFallback>MR</AvatarFallback>
            </Avatar>
            <span className="hidden text-sm font-medium sm:inline">Mark V.</span>
            <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>
            <div className="flex flex-col">
              <span className="font-semibold">Mark Vincent Roldan</span>
              <span className="text-xs text-muted-foreground">OJT Trainee</span>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Help</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Sign out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
