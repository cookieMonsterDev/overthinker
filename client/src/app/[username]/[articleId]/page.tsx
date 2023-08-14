import { MarkDownPreview } from "@/components/MarkDownPreview";
import { findArticleByIdService } from "@/services";
import styles from "./ArticlePage.module.scss";
import { ArticleToolbar } from "@/components/ArticleToolbar";
import { ArticleInfo } from "@/components/ArticleInfo";
import { Metadata } from "next";
import { dateTimeFormater } from "@/utils/dateTimeFormater";

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
    <main>
      <article className={styles.article}>
        <h1 className={styles.title} title={article.title}>
          {article.title}
        </h1>
        <ArticleInfo
          username={article.author.username}
          avatarUrl={article.author.avatarUrl}
          createdAt={article.createdAt}
          updatedAt={article.updatedAt}
        />
        <ArticleToolbar likes={999} comments={999} />
        <MarkDownPreview source={article.content} className={styles.content} />
        <ArticleToolbar
          likes={999}
          comments={999}
          className={styles.bottom_toolbar}
        />
      </article>
    </main>
  );
};

export default ArticlePage;
