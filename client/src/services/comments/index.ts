import { Pagination } from "@/types/pagination.type";
import { CommentResponse } from "./types";
import { Api } from "@/lib/axios";

export const getCommentsServise = async (
  query: string = ""
): Promise<Pagination<CommentResponse>> => {
  try {
    const { data } = await Api.get(`/comments${query}`);

    return data;
  } catch (error) {
    throw error;
  }
};
