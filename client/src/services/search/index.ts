import { Api } from "@/lib/axios";
import { SearchResponse } from "./types";

export const searchService = async (q: string): Promise<SearchResponse> => {
  try {
    const { data } = await Api.get(`/search?q=${q}`);

    return data;
  } catch (error) {
    throw error;
  }
};
