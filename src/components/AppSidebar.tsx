import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  Target,
  Calendar,
  Building2,
  Eye,
  History,
  Network,
  Briefcase,
  FileText,
  Clock,
  TrendingUp,
  BarChart3,
  ClipboardCheck,
  FolderOpen,
  Heart,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const overview = { title: "Overview", url: "/", icon: LayoutDashboard };

const groups = [
  {
    label: "I. Introduction",
    items: [
      {
        title: "Importance of Internship",
        url: "/introduction/importance",
        icon: BookOpen,
      },
      { title: "Objectives", url: "/introduction/objectives", icon: Target },
      {
        title: "Time and Place",
        url: "/introduction/time-and-place",
        icon: Calendar,
      },
    ],
  },
  {
    label: "II. Company Profile",
    items: [
      { title: "Nature", url: "/company/nature", icon: Building2 },
      { title: "Mission / Vision", url: "/company/mission-vision", icon: Eye },
      { title: "History", url: "/company/history", icon: History },
      { title: "Organization", url: "/company/organization", icon: Network },
      { title: "Services", url: "/company/services", icon: Briefcase },
    ],
  },
  {
    label: "III. Work Experiences",
    items: [
      { title: "Weekly Reports", url: "/work/weekly-reports", icon: FileText },
      {
        title: "Daily Time Record",
        url: "/work/daily-time-record",
        icon: Clock,
      },
      {
        title: "Progress Report",
        url: "/work/progress-report",
        icon: TrendingUp,
      },
      {
        title: "Analysis Report",
        url: "/work/analysis-report",
        icon: BarChart3,
      },
    ],
  },
];

const bottom = [
  { title: "IV. Assessment", url: "/assessment", icon: ClipboardCheck },
  { title: "V. Appendices", url: "/appendices", icon: FolderOpen },
];

export function AppSidebar() {
  const { pathname } = useLocation();
  const isActive = (url: string) =>
    url === "/" ? pathname === "/" : pathname.startsWith(url);

  const linkCls = (active: boolean) =>
    `flex items-center gap-3 rounded-md px-2 py-2 text-sm transition-colors ${
      active
        ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
        : "text-sidebar-foreground hover:bg-sidebar-accent/60"
    }`;

  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-2 px-2 py-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Heart className="h-5 w-5" fill="currentColor" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold text-sidebar-foreground">
              E-Portfolio
            </span>
            <span className="text-xs text-muted-foreground">
              Ivery Abegail Policarpio
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink
                    to={overview.url}
                    end
                    className={linkCls(isActive(overview.url))}
                  >
                    <overview.icon className="h-4 w-4 shrink-0" />
                    <span>{overview.title}</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {groups.map((g) => (
          <SidebarGroup key={g.label}>
            <SidebarGroupLabel className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              {g.label}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {g.items.map((item) => (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        className={linkCls(isActive(item.url))}
                      >
                        <item.icon className="h-4 w-4 shrink-0" />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {bottom.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={linkCls(isActive(item.url))}
                    >
                      <item.icon className="h-4 w-4 shrink-0" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <div className="flex items-center gap-2 px-2 py-3">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-primary">
            <Heart className="h-4 w-4" fill="currentColor" />
          </div>
          <div className="text-xs leading-tight">
            <p className="font-semibold text-sidebar-foreground">
              Philippine Red Cross
            </p>
            <p className="text-muted-foreground">Always First, Always Ready</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
