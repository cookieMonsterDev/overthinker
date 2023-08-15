import { Api } from "@/lib/axios";
import {
  ArticleResponse,
  CreateArticleServisePayload,
  FindArticlesPayload,
} from "./types";
import { toastNotificationErrorHandler } from "../errorHandler";
import { Pagination } from "@/types/pagination.type";

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
    throw error;
  }
};

export const findArtilcesService = async (
  query: string = ''
): Promise<Pagination<ArticleResponse>> => {
  try {
    const { data } = await Api.get(`/articles${query}`);

    return data;
  } catch (error) {
    throw error;
  }
};
