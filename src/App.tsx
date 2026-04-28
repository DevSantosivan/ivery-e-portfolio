import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { AppLayout } from "@/components/AppLayout";

import Overview from "./pages/Overview";
import Importance from "./pages/Importance";
import Objectives from "./pages/Objectives";
import TimeAndPlace from "./pages/TimeAndPlace";
import CompanyNature from "./pages/CompanyNature";
import MissionVision from "./pages/MissionVision";
import CompanyHistory from "./pages/CompanyHistory";
import CompanyOrganization from "./pages/CompanyOrganization";
import CompanyServices from "./pages/CompanyServices";
import WeeklyReports from "./pages/WeeklyReports";
import DailyTimeRecord from "./pages/DailyTimeRecord";
import ProgressReport from "./pages/ProgressReport";
import AnalysisReport from "./pages/AnalysisReport";
import Assessment from "./pages/Assessment";
import Appendices from "./pages/Appendices";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppLayout>
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/introduction/importance" element={<Importance />} />
              <Route path="/introduction/objectives" element={<Objectives />} />
              <Route path="/introduction/time-and-place" element={<TimeAndPlace />} />
              <Route path="/company/nature" element={<CompanyNature />} />
              <Route path="/company/mission-vision" element={<MissionVision />} />
              <Route path="/company/history" element={<CompanyHistory />} />
              <Route path="/company/organization" element={<CompanyOrganization />} />
              <Route path="/company/services" element={<CompanyServices />} />
              <Route path="/work/weekly-reports" element={<WeeklyReports />} />
              <Route path="/work/daily-time-record" element={<DailyTimeRecord />} />
              <Route path="/work/progress-report" element={<ProgressReport />} />
              <Route path="/work/analysis-report" element={<AnalysisReport />} />
              <Route path="/assessment" element={<Assessment />} />
              <Route path="/appendices" element={<Appendices />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AppLayout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
