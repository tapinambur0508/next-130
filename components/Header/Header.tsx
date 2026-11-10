import Link from "next/link";

function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <nav className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          NoteHub
        </Link>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-600 dark:text-neutral-300">
          <li>
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="transition-colors hover:text-foreground"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contacts"
              className="transition-colors hover:text-foreground"
            >
              Contacts
            </Link>
          </li>
          <li>
            <Link
              href="/control-panel"
              className="transition-colors hover:text-foreground"
            >
              Control panel
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
