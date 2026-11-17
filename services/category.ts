import axios from "axios";

import type { Category } from "@/types/category";

const API = axios.create({
  baseURL: "https://next-v1-notes-api.goit.study",
});

export async function getCategories(): Promise<Category[]> {
  const { data } = await API.get<Category[]>("/categories");
  return data;
}
