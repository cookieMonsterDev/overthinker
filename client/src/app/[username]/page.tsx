import { ArticleCard } from "@/components/ArticleCard";
import { Pagination } from "@/components/Pagination";
import { findArtilcesService, findUserByUsernameService } from "@/services";
import { Order } from "@/types/order.type";
import { objectToQueryString } from "@/utils/objectToQueryString";
import styles from "./ProfilePage.module.scss";
import { Metadata } from "next";
import { UserPreview } from "@/components/UserPreview";

interface ProfilePageProps {
  params: { username: string };
  searchParams: {
    orderByCreatedAt: Order;
    orderByUpdatedAt: Order;
    page: number;
    limit: number;
  };
}

export const generateMetadata = async ({
  params,
}: ProfilePageProps): Promise<Metadata> => {
  const user = await findUserByUsernameService(params.username);

  return {
    title: `${user.username} - OverThinker`,
    description: user.bio ? `${user.bio.slice(0, 250)}` : "some random bio",
    openGraph: {
      title: `${user.username} - OverThinker`,
      description: user.bio ? `${user.bio.slice(0, 250)}` : "some random bio",
    },
  };
};

const ProfilePage = async ({ params, searchParams }: ProfilePageProps) => {
  const user = await findUserByUsernameService(params.username);
  const query = objectToQueryString({ ...searchParams, author: user.username });
  const articles = await findArtilcesService(query);

  return (
    <main>
      <section className={styles.user}>
        <UserPreview {...user} />
      </section>
      <section className={styles.list}>
        {articles.data.map((e) => (
          <ArticleCard {...e} key={e._id} />
        ))}
        <Pagination
          currentPage={articles.currentPage}
          totalPages={articles.totalPages}
          leftFromCurrent={2}
          rightFromCurrent={2}
          className={styles.pagination}
        />
      </section>
    </main>
  );
};

export default ProfilePage;
