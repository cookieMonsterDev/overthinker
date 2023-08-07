import { Api } from "@/lib/axios";
import { CreateArticleServisePayload } from "./types";
import errorHandler from "../errorHandler";


export const createArticleService = async (
  payload: CreateArticleServisePayload
): Promise<string> => {
  try {
    const { data } = await Api.post("/articles", payload.body, {
      headers: {
        Authorization: `Bearer ${payload.token}`,
      },
    });

    return data._id;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const findArticleByIdService = async (
  articleId: string
): Promise<any> => {
  try {
    const { data } = await Api.get(`/articles/${articleId}`);

    return data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};