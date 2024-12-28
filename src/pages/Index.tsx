import { useAuth } from "@/lib/auth";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { LandingPage } from "@/components/landing/LandingPage";

/**
 * Index Page Component
 * 
 * Root page component that conditionally renders either the dashboard
 * or landing page based on user authentication status.
 * 
 * @returns {JSX.Element} Either the DashboardLayout for authenticated users
 *                        or the LandingPage for visitors
 */
const Index = () => {
  const { user } = useAuth();

  return user ? <DashboardLayout /> : <LandingPage />;
};

export default Index;