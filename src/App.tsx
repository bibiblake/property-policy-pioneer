import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { MainNav } from "@/components/layout/MainNav";
import Index from "./pages/Index";
import Policies from "./pages/Policies";
import Properties from "./pages/Properties";
import Claims from "./pages/Claims";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <MainNav />
            <main className="flex-1 p-8">
              <SidebarTrigger />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/policies" element={<Policies />} />
                <Route path="/properties" element={<Properties />} />
                <Route path="/claims" element={<Claims />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;