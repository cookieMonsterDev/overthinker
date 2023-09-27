import { MarkDownPreview } from "@/components/MarkDownPreview";
import { findArticleByIdService } from "@/services";
import { ArticleToolbar } from "@/components/ArticleToolbar";
import { ArticleInfo } from "@/components/ArticleInfo";
import { Metadata } from "next";
import { dateTimeFormater } from "@/utils/dateTimeFormater";
import { Comments } from "@/components/Comments";

//comments mock
const data = [
  {
    _id: crypto.randomUUID(),
    user: {
      _id: crypto.randomUUID(),
      username: "mykhailo",
      firstName: null,
      lastName: null,
      bio: null,
      avatarUrl:
        "https://lh3.googleusercontent.com/ogw/AKPQZvydIDn03E-Gv3_yo6eC0luUfRIfasWZdH5wENIL=s32-c-mo",
      createdAt: new Date(),
      updatedAt: new Date(),
      __v: 0,
    },
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet assumenda ut facere exercitationem omnis sint commodi quo ducimus minima. Reprehenderit accusantium aliquam odit dolorem ut, earum dicta possimus debitis molestiae id doloribus numquam quidem sunt dolores delectus officiis! Illo quisquam vel rerum. Sunt quasi optio totam laborum modi, aliquid maxime?",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: crypto.randomUUID(),
    user: {
      _id: crypto.randomUUID(),
      username: "Mykhailo_test",
      firstName: null,
      lastName: null,
      bio: null,
      avatarUrl:
        "https://lh3.googleusercontent.com/ogw/AKPQZvydIDn03E-Gv3_yo6eC0luUfRIfasWZdH5wENIL=s32-c-mo",
      createdAt: new Date(),
      updatedAt: new Date(),
      __v: 0,
    },
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet assumenda ut facere exercitationem omnis sint commodi quo ducimus minima. Reprehenderit accusantium aliquam odit dolorem ut, earum dicta possimus debitis molestiae id doloribus numquam quidem sunt dolores delectus officiis! Illo quisquam vel rerum. Sunt quasi optio totam laborum modi, aliquid maxime?",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: crypto.randomUUID(),
    user: {
      _id: crypto.randomUUID(),
      username: "Mykhailo_test",
      firstName: null,
      lastName: null,
      bio: null,
      avatarUrl:
        "https://lh3.googleusercontent.com/ogw/AKPQZvydIDn03E-Gv3_yo6eC0luUfRIfasWZdH5wENIL=s32-c-mo",
      createdAt: new Date(),
      updatedAt: new Date(),
      __v: 0,
    },
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet assumenda ut facere exercitationem omnis sint commodi quo ducimus minima. Reprehenderit accusantium aliquam odit dolorem ut, earum dicta possimus debitis molestiae id doloribus numquam quidem sunt dolores delectus officiis! Illo quisquam vel rerum. Sunt quasi optio totam laborum modi, aliquid maxime?",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: crypto.randomUUID(),
    user: {
      _id: crypto.randomUUID(),
      username: "Mykhailo_test",
      firstName: null,
      lastName: null,
      bio: null,
      avatarUrl:
        "https://lh3.googleusercontent.com/ogw/AKPQZvydIDn03E-Gv3_yo6eC0luUfRIfasWZdH5wENIL=s32-c-mo",
      createdAt: new Date(),
      updatedAt: new Date(),
      __v: 0,
    },
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet assumenda ut facere exercitationem omnis sint commodi quo ducimus minima. Reprehenderit accusantium aliquam odit dolorem ut, earum dicta possimus debitis molestiae id doloribus numquam quidem sunt dolores delectus officiis! Illo quisquam vel rerum. Sunt quasi optio totam laborum modi, aliquid maxime?",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
//

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
        <h1
          className="text-[3rem] my-8 w-full inline-size-full-overflow-wrap-break"
          title={article.title}
        >
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
        <ArticleToolbar likes={999} comments={999} className="mb-4" />
      </article>
      <Comments comments={data} />
    </main>
  );
};

export default ArticlePage;
