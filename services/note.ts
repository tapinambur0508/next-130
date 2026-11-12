import axios from "axios";

import type { Note } from "@/types/note";

const API = axios.create({
  baseURL: "https://next-v1-notes-api.goit.study",
});

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, ms);
  });
}

export async function getNotes(): Promise<{ notes: Note[]; total: number }> {
  await delay(5000);
  const { data } = await API.get<{ notes: Note[]; total: number }>("/notes");
  return data;
}

export async function getNote(id: Note["id"]): Promise<Note> {
  const { data } = await API.get<Note>(`/notes/${id}`);
  return data;
}
