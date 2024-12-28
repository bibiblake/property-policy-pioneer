import { Settings as SettingsIcon } from "lucide-react";

const Settings = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account preferences and settings
        </p>
      </div>

      <div className="rounded-md border p-8 text-center">
        <SettingsIcon className="mx-auto h-12 w-12 text-muted-foreground" />
        <h3 className="mt-4 text-lg font-semibold">Settings Coming Soon</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          This section is under development. Check back soon for account settings and preferences.
        </p>
      </div>
    </div>
  );
};

export default Settings;