"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

import { getNote } from "@/services/note";

import { useState } from "react";

const buttonClassName =
  "rounded-md border border-neutral-300 px-3 py-1.5 text-sm transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900";

const fieldClassName =
  "w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-neutral-500 dark:border-neutral-700";

function NoteDetailsClient() {
  const [isEdit, setIsEdit] = useState(false);

  const { noteId } = useParams<{ noteId: string }>();
  const router = useRouter();

  const noteQ = useQuery({
    queryKey: ["note", noteId],
    queryFn: () => getNote(noteId),
    refetchOnMount: false,
  });

  if (noteQ.isLoading) {
    return <p className="mt-6 text-sm text-neutral-500">Loading...</p>;
  }

  if (noteQ.isError) {
    return (
      <p className="mt-6 text-sm text-red-600">{noteQ.error.message}</p>
    );
  }

  if (noteQ.isSuccess) {
    const note = noteQ.data;

    return (
      <div className="mt-6 space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <h1 className="text-3xl font-semibold tracking-tight">{note.title}</h1>
          <div className="flex flex-wrap gap-2">
            {isEdit !== true && (
              <button className={buttonClassName} onClick={() => setIsEdit(true)}>
                Edit
              </button>
            )}
            {isEdit === true && (
              <button className={buttonClassName} onClick={() => setIsEdit(false)}>
                Close
              </button>
            )}
            <button className={buttonClassName} onClick={() => router.back()}>
              Back
            </button>
            {/* <Link href="/notes">Back</Link> */}
          </div>
        </div>

        {isEdit ? (
          <form className="space-y-4">
            <div>
              <input
                className={fieldClassName}
                placeholder="Title"
                defaultValue={note.title}
              />
            </div>
            <div>
              <textarea
                className={`${fieldClassName} min-h-40`}
                placeholder="Content"
                defaultValue={note.content}
              />
            </div>
            <div>
              <select className={fieldClassName}></select>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="submit"
                className="rounded-md bg-foreground px-3 py-1.5 text-sm text-background"
              >
                Submit
              </button>
              <button
                type="button"
                className={buttonClassName}
                onClick={() => setIsEdit(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-4">
            <p className="text-sm leading-6 whitespace-pre-wrap text-neutral-700 dark:text-neutral-300">
              {note.content}
            </p>
            <span className="inline-flex rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-300">
              {note.category.name}
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default NoteDetailsClient;
