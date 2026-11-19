interface SettingsLayoutProps {
  children: React.ReactNode;
}

function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-sm font-medium tracking-wide text-neutral-500 uppercase">
        Settings
      </h2>
      {children}
    </div>
  );
}

export default SettingsLayout;
