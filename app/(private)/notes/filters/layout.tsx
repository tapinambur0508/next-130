interface NoteFiltersLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

function NoteFiltersLayout({children, sidebar}: NoteFiltersLayoutProps) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-10 md:flex-row">
      <aside className="shrink-0 md:w-52">{sidebar}</aside>

      <div className="min-w-0 flex-1">{children}</div>
    </div>
  )
}

export default NoteFiltersLayout;
