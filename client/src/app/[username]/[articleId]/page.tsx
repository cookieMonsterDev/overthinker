import { findArticleByIdService } from "@/lib/axios/services";

interface ArticlePageProps {
  params: { articleId: string };
}

const ArticlePage = async ({ params }: ArticlePageProps) => {
  const article = await findArticleByIdService(params.articleId);

  return (
    <main>
      <div>{article._id}</div>
    </main>
  );
};

export default ArticlePage;
