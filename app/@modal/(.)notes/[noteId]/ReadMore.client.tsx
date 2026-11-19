"use client";

import type {Note} from "@/types/note";

interface ReadMoreClientProps {
  noteId: Note["id"]
} 

function ReadMoreClient({noteId}: ReadMoreClientProps) {
  return (
    <button
      onClick={() => (window.location.href = `/notes/${noteId}`)}
      className="rounded-md border border-neutral-300 px-3 py-1.5 text-sm transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
    >
      Read more
    </button>
  )
}

export default ReadMoreClient;