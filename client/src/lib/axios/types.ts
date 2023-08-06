export interface loginUserServisePayload {
  email: string;
  password: string;
}


export interface CreateArticleServisePayload {
  body: {
    title: string;
    content: string;
  };
  token: string;
}
