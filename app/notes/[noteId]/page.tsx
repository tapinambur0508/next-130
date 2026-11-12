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
    <div>
      <h1>Note {noteId}</h1>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <NoteDetailsClient />
      </HydrationBoundary>
    </div>
  );
}

export default NotePage;
