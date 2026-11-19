import { Suspense } from "react";

import { getNotes } from "@/services/note";

import NoteList from "@/components/NoteList/NoteList";

interface NoteFiltersProps {
  params: Promise<{ categoryId: string[] }>;
}

async function NoteFiltersList({ params }: NoteFiltersProps) {
  const { categoryId } = await params;

  console.log({ categoryId });

  const response = await getNotes(
    categoryId[0] === "all" ? undefined : categoryId[0],
  );

  return <NoteList notes={response.notes} />;
}

function NoteFilters({ params }: NoteFiltersProps) {
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight">Notes by category</h1>

      <Suspense
        fallback={
          <p className="mt-6 text-sm text-neutral-500">Notes are loading...</p>
        }
      >
        <NoteFiltersList params={params} />
      </Suspense>
    </div>
  );
}

export default NoteFilters;
