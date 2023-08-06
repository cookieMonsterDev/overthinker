import { Api } from "./axios";
import errorHandler from "./errorHandler";
import { CreateArticlePayload } from "./types";

export const createArticle = async (
  payload: CreateArticlePayload
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

export const findArticleById = async (articleId: string): Promise<any> => {
  try {
    const { data } = await Api.get(`/articles/${articleId}`);

    return data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};
