import { Shield, Building2, FileText, Check } from "lucide-react";

/**
 * Feature Component
 * 
 * Renders an individual feature with an icon, title, description, and list of benefits.
 * 
 * @param {Object} props - Component props
 * @param {React.ElementType} props.icon - The Lucide icon component to display
 * @param {string} props.title - Feature title
 * @param {string} props.description - Feature description
 * @param {string[]} props.benefits - List of feature benefits
 * @returns {JSX.Element} A feature card component
 */
const Feature = ({ 
  icon: Icon, 
  title, 
  description, 
  benefits 
}: { 
  icon: React.ElementType;
  title: string;
  description: string;
  benefits: string[];
}) => (
  <div className="flex flex-col">
    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
      <Icon className="h-5 w-5 flex-none text-primary" />
      {title}
    </dt>
    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
      <p className="flex-auto">{description}</p>
      <p className="mt-6">
        <ul className="space-y-3">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex gap-x-3">
              <Check className="h-6 w-5 flex-none text-primary" />
              {benefit}
            </li>
          ))}
        </ul>
      </p>
    </dd>
  </div>
);

/**
 * FeaturesSection Component
 * 
 * Displays the main features of the application in a grid layout.
 * Each feature includes an icon, title, description, and list of benefits.
 * 
 * @returns {JSX.Element} The features section component
 */
export function FeaturesSection() {
  const features = [
    {
      icon: Building2,
      title: "Property Management",
      description: "Track multiple properties and their insurance details in one centralized dashboard.",
      benefits: ["Organize properties", "Track coverage", "Monitor expiration dates"],
    },
    {
      icon: FileText,
      title: "Policy Management",
      description: "Easily manage and track all your insurance policies in one place.",
      benefits: ["Digital policy storage", "Renewal reminders", "Coverage analysis"],
    },
    {
      icon: Shield,
      title: "Claims Handling",
      description: "Streamline your claims process with our intuitive management system.",
      benefits: ["File claims easily", "Track status", "Document management"],
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Manage Smarter
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to manage property insurance
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <Feature key={feature.title} {...feature} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}