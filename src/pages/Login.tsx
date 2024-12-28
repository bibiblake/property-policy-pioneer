import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { Navigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
      </div>
    );
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to your account to continue
          </p>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-6">
          <div className="mb-4 text-sm text-muted-foreground">
            <p className="font-medium mb-2">Important Information:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Password must be at least 6 characters long</li>
              <li>Make sure to use a valid email address</li>
              <li>If you're a new user, please sign up first</li>
              <li>Check your email for confirmation link after signing up</li>
            </ul>
          </div>
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#2563eb',
                    brandAccent: '#1d4ed8',
                  },
                },
              },
              className: {
                container: 'space-y-4',
                button: 'w-full',
                label: 'text-sm font-medium text-gray-700',
                input: 'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm',
              },
            }}
            redirectTo={`${window.location.origin}/`}
            theme="light"
            onError={(error) => {
              console.error('Auth error:', error);
              if (error.message.includes('invalid_credentials')) {
                toast.error('Invalid email or password. Please try again.');
              } else if (error.message.includes('weak_password')) {
                toast.error('Password must be at least 6 characters long.');
              } else {
                toast.error('An error occurred. Please try again.');
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;