import { Api } from "./config";
import errorHandler from "./errorHandler";
import { CreateArticleServisePayload, loginUserServisePayload } from "./types";

export const loginUserServise = async (payload: loginUserServisePayload) => {
  try {
    const { data } = await Api.post("/auth/login", payload);

    return data;
  } catch (error) {
    throw error;
  }
};

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
