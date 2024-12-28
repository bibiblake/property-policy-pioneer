import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Shield, Building2, FileText, Rocket, Check, AlertCircle, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { StatCard } from "@/components/dashboard/StatCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { PolicyDistribution } from "@/components/dashboard/PolicyDistribution";
import { ExpiringPolicies } from "@/components/dashboard/ExpiringPolicies";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { CostOverview } from "@/components/dashboard/CostOverview";

const Index = () => {
  const { user } = useAuth();

  if (user) {
    return (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Overview of your insurance portfolio
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Properties"
            value="12"
            icon={<Building2 className="h-4 w-4 text-muted-foreground" />}
          />
          <StatCard
            title="Active Policies"
            value="24"
            icon={<FileText className="h-4 w-4 text-muted-foreground" />}
          />
          <StatCard
            title="Open Claims"
            value="3"
            icon={<AlertCircle className="h-4 w-4 text-muted-foreground" />}
          />
          <StatCard
            title="Annual Premium"
            value="$48,500"
            icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-7">
          <QuickActions />
          <PolicyDistribution />
        </div>

        <div className="grid gap-4 md:grid-cols-7">
          <ExpiringPolicies />
          <RecentActivity />
        </div>

        <div className="grid gap-4 md:grid-cols-7">
          <CostOverview />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-16 text-center lg:pt-32">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl">
          Manage Your{" "}
          <span className="relative whitespace-nowrap text-primary">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute left-0 top-2/3 h-[0.58em] w-full fill-primary/30"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
            </svg>
            <span className="relative">Property Insurance</span>
          </span>{" "}
          Made Simple
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
          Streamline your multi-property insurance management with our intuitive platform. Track policies, manage claims, and protect your investments all in one place.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <Link to="/login">
            <Button size="lg" className="group">
              Get Started Free
              <Rocket className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Manage Smarter</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to manage property insurance
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <Building2 className="h-5 w-5 flex-none text-primary" />
                  Property Management
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Track multiple properties and their insurance details in one centralized dashboard.</p>
                  <p className="mt-6">
                    <ul className="space-y-3">
                      {["Organize properties", "Track coverage", "Monitor expiration dates"].map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <Check className="h-6 w-5 flex-none text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <FileText className="h-5 w-5 flex-none text-primary" />
                  Policy Management
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Easily manage and track all your insurance policies in one place.</p>
                  <p className="mt-6">
                    <ul className="space-y-3">
                      {["Digital policy storage", "Renewal reminders", "Coverage analysis"].map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <Check className="h-6 w-5 flex-none text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <Shield className="h-5 w-5 flex-none text-primary" />
                  Claims Handling
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Streamline your claims process with our intuitive management system.</p>
                  <p className="mt-6">
                    <ul className="space-y-3">
                      {["File claims easily", "Track status", "Document management"].map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <Check className="h-6 w-5 flex-none text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to simplify your insurance management?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-200">
              Start managing your property insurance portfolio more efficiently today. No credit card required.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/login">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  Get Started Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;