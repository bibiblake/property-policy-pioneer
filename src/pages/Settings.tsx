import { Settings as SettingsIcon, CreditCard } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const Settings = () => {
  const { user } = useAuth();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('success') === 'true') {
      toast.success('Successfully upgraded to premium!');
    }
    if (searchParams.get('canceled') === 'true') {
      toast.error('Subscription upgrade canceled.');
    }
  }, [searchParams]);

  const { data: profile } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user?.id)
        .single();

      if (error) throw error;
      return data;
    },
  });

  const handleUpgrade = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {},
      });

      if (error) throw error;
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to start checkout process');
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account preferences and settings
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border p-6">
          <div className="flex items-center gap-4">
            <SettingsIcon className="h-8 w-8 text-muted-foreground" />
            <div>
              <h3 className="text-lg font-semibold">Account Information</h3>
              <p className="text-sm text-muted-foreground">
                {user?.email}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <CreditCard className="h-8 w-8 text-muted-foreground" />
              <div>
                <h3 className="text-lg font-semibold">Subscription</h3>
                <p className="text-sm text-muted-foreground">
                  Current plan: {profile?.subscription_tier || 'free'}
                </p>
              </div>
            </div>
            {profile?.subscription_tier === 'free' && (
              <Button onClick={handleUpgrade}>
                Upgrade to Premium
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;