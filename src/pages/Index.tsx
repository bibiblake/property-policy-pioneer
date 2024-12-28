import { useAuth } from "@/lib/auth";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { LandingPage } from "@/components/landing/LandingPage";

/**
 * Index Page Component
 * 
 * Root-level component that serves as the main entry point of the application.
 * Conditionally renders either the dashboard for authenticated users or the 
 * landing page for visitors.
 * 
 * @component
 * @example
 * ```tsx
 * <BrowserRouter>
 *   <Route path="/" element={<Index />} />
 * </BrowserRouter>
 * ```
 */
const Index = () => {
  const { user } = useAuth();

  return user ? <DashboardLayout /> : <LandingPage />;
};

export default Index;