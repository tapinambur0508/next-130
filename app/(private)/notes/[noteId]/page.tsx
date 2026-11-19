import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";

import { getNote } from "@/services/note";

import NoteDetailsClient from "./NoteDetails.client";

interface NotePageProps {
  params: Promise<{ noteId: string }>;
}

async function NotePage({ params }: NotePageProps) {
  const { noteId } = await params;

  const queryClient = new QueryClient();

  await queryClient.query({
    queryKey: ["note", noteId],
    queryFn: () => getNote(noteId),
  });

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-10">
      <h1 className="text-sm font-medium text-neutral-500">Note {noteId}</h1>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <NoteDetailsClient />
      </HydrationBoundary>
    </div>
  );
}

export default NotePage;
