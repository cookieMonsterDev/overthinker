import { Api } from "@/lib/axios";
import { ArticleResponse, CreateArticleServisePayload } from "./types";
import { toastNotificationErrorHandler } from "../errorHandler";

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
    toastNotificationErrorHandler(error);
    throw error;
  }
};

export const findArticleByIdService = async (
  articleId: string
): Promise<ArticleResponse> => {
  try {
    const { data } = await Api.get(`/articles/${articleId}`);

    return data;
  } catch (error) {
    toastNotificationErrorHandler(error);
    throw error;
  }
};
