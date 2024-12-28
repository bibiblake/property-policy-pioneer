import { HeroSection } from "./HeroSection";
import { FeaturesSection } from "./FeaturesSection";
import { CtaSection } from "./CtaSection";

/**
 * LandingPage Component
 * 
 * Main component for the public landing page. Combines all landing page sections
 * into a cohesive layout with proper spacing and styling.
 * 
 * @returns {JSX.Element} The complete landing page
 */
export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <HeroSection />
      <FeaturesSection />
      <CtaSection />
    </div>
  );
}