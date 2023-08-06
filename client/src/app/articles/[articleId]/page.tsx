import { findArticleById } from "@/lib/services";

const Article = async ({ params }: { params: { articleId: string } }) => {
  const data = await findArticleById(params.articleId);

  return <main>{JSON.stringify(data)}</main>;
};

export default Article;
