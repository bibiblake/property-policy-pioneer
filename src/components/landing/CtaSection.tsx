import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CtaSection() {
  return (
    <div className="bg-primary">
      <div className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to simplify your insurance management?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg leading-8 text-gray-200">
            Start managing your property insurance portfolio more efficiently today. 
            No credit card required.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/login">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}