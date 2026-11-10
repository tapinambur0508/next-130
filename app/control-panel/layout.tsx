interface ControlPanelLayoutProps {
  children: React.ReactNode;
}

function ControlPanelLayout({ children }: ControlPanelLayoutProps) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-10 md:flex-row">
      <aside className="flex shrink-0 flex-col gap-1 text-sm md:w-48">
        <a
          href="/control-panel"
          className="rounded-md px-3 py-2 text-neutral-700 transition-colors hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-900"
        >
          Control Panel
        </a>
        <a
          href="/control-panel/settings"
          className="rounded-md px-3 py-2 text-neutral-700 transition-colors hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-900"
        >
          Settings
        </a>
        <a
          href="/control-panel/settings/edit"
          className="rounded-md px-3 py-2 text-neutral-700 transition-colors hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-900"
        >
          Settings Edit
        </a>
      </aside>
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}

export default ControlPanelLayout;
