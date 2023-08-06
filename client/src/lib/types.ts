export interface CreateArticlePayload {
  body: {
    title: string;
    content: string;
  };
  token: string;
}
