import {getNote} from "@/services/note";

import Modal from "@/components/Modal/Modal";

import ReadMoreClient from "./ReadMore.client";

interface NoteProps {
  params: Promise<{ noteId: string }>
}

async function NotePreview({ params }: NoteProps) {
  const { noteId } = await params;
  const note = await getNote(noteId);

  return (
    <Modal>
      <h1 className="text-2xl font-semibold tracking-tight">{note.title}</h1>

      <p className="text-sm leading-6 whitespace-pre-wrap text-neutral-700 dark:text-neutral-300">
        {note.content}
      </p>
      <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-500">
        <span className="inline-flex rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-300">
          {note.category.name}
        </span>
        <span>|</span>
        <span>{new Date(note.createdAt).toLocaleString()}</span>
      </div>

      <ReadMoreClient noteId={note.id} />
    </Modal>
  )
}

export default NotePreview;
