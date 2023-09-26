import { MarkDownPreview } from "@/components/MarkDownPreview";
import { findArticleByIdService } from "@/services";
import { ArticleToolbar } from "@/components/ArticleToolbar";
import { ArticleInfo } from "@/components/ArticleInfo";
import { Metadata } from "next";
import { dateTimeFormater } from "@/utils/dateTimeFormater";
import { Comments } from "@/components/Comments";

interface ArticlePageProps {
  params: { articleId: string; username: string };
}

export const generateMetadata = async ({
  params,
}: ArticlePageProps): Promise<Metadata> => {
  const article = await findArticleByIdService(params.articleId);

  return {
    title: `${article.title} -  ${dateTimeFormater(
      new Date(article.createdAt)
    )} - ${params.username} - OverThinker`,
    description: `${article.content.slice(0, 250)}`,
    openGraph: {
      title: `${params.username} - OverThinker`,
      description: `${article.content.slice(0, 250)}`,
    },
  };
};

const ArticlePage = async ({ params }: ArticlePageProps) => {
  const article = await findArticleByIdService(params.articleId);

  return (
    <main className="container py-8 flex flex-col gap-4">
      <article className="flex flex-col max-w-full">
        <h1 className="text-[3rem] my-8 w-full inline-size-full-overflow-wrap-break" title={article.title}>
          {article.title}
        </h1>
        <ArticleInfo
          username={article.author.username}
          avatarUrl={article.author.avatarUrl}
          createdAt={article.createdAt}
          updatedAt={article.updatedAt}
        />
        <ArticleToolbar likes={999} comments={999} />
        <MarkDownPreview source={article.content} className="my-6" />
        <ArticleToolbar
          likes={999}
          comments={999}
          className="mb-4"
        />
      </article>
      <Comments />
    </main>
  );
};

export default ArticlePage;
