"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

import { getNote } from "@/services/note";

import { useState } from "react";

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
    return <p>Loading...</p>;
  }

  if (noteQ.isError) {
    return <p>{noteQ.error.message}</p>;
  }

  if (noteQ.isSuccess) {
    const note = noteQ.data;

    return (
      <div>
        <h1>{note.title}</h1>
        {isEdit !== true && (
          <button onClick={() => setIsEdit(true)}>Edit</button>
        )}
        {isEdit === true && (
          <button onClick={() => setIsEdit(false)}>Close</button>
        )}
        <button onClick={() => router.back()}>Back</button>
        {/* <Link href="/notes">Back</Link> */}

        {isEdit ? (
          <form>
            <div>
              <input placeholder="Title" defaultValue={note.title} />
            </div>
            <div>
              <textarea placeholder="Content" defaultValue={note.content} />
            </div>
            <div>
              <select></select>
            </div>
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setIsEdit(false)}>
              Cancel
            </button>
          </form>
        ) : (
          <>
            <p>{note.content}</p>
            <span>{note.category.name}</span>
          </>
        )}
      </div>
    );
  }
}

export default NoteDetailsClient;
