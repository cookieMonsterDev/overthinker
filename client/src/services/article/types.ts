export interface CreateArticleServisePayload {
  body: {
    title: string;
    content: string;
  };
  token: string;
}