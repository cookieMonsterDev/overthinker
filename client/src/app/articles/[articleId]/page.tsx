import { findArticleByIdService } from "@/lib/axios/services";

const Article = async ({ params }: { params: { articleId: string } }) => {
  const data = await findArticleByIdService(params.articleId);

  return <main>{JSON.stringify(data)}</main>;
};

export default Article;
