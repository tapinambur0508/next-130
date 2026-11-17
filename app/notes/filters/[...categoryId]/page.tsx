import { getNotes } from "@/services/note";

import NoteList from "@/components/NoteList/NoteList";

interface NoteFiltersProps {
  params: Promise<{ categoryId: string[] }>;
}

async function NoteFilters({ params }: NoteFiltersProps) {
  const { categoryId } = await params;

  console.log({ categoryId });

  const response = await getNotes(
    categoryId[0] === "all" ? undefined : categoryId[0],
  );

  return (
    <div>
      <h1>Notes by category</h1>

      <NoteList notes={response.notes} />
    </div>
  );
}

export default NoteFilters;
