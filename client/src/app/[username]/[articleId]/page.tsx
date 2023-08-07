import { MarkDownPreview } from "@/components/MarkDownPreview";
import { findArticleByIdService } from "@/services";
import styles from "./ArticlePage.module.scss";
import { ArticleToolbar } from "@/components/ArticleToolbar";
import { ArticleInfo } from "@/components/ArticleInfo";

interface ArticlePageProps {
  params: { articleId: string };
}

const ArticlePage = async ({ params }: ArticlePageProps) => {
  const article = await findArticleByIdService(params.articleId);

  console.log(article.author)

  return (
    <main>
      <article className={styles.article}>
        <h1 className={styles.title}>{article.title}</h1>
        <ArticleInfo />
        <ArticleToolbar likes={0} />
        <MarkDownPreview source={article.content} className={styles.content} />
      </article>
    </main>
  );
};

export default ArticlePage;
