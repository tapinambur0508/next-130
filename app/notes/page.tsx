import { getNotes } from "@/services/note";

import NoteList from "@/components/NoteList/NoteList";

async function Notes() {
  const result = await getNotes();

  return (
    <div>
      <h1>Notes ({result.total})</h1>

      <NoteList notes={result.notes} />
    </div>
  );
}

export default Notes;
