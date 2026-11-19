import Link from "next/link";

import type { Note } from "@/types/note";

interface NoteListProps {
  notes: Note[];
}

function NoteList({ notes }: NoteListProps) {
  return (
    <ul className="mt-6 flex flex-col gap-2">
      {notes.map((note) => (
        <li key={note.id}>
          <Link
            href={`/notes/${note.id}`}
            className="block rounded-lg border border-neutral-200 px-4 py-3 text-sm font-medium transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
          >
            {note.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
