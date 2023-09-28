import { findArtilcesService } from "@/services";
import { Order } from "@/types/order.type";
import { objectToQueryString } from "@/utils/objectToQueryString";
import { Pagination } from "@/components/Pagination";
import { ArticleCard } from "@/components/ArticleCard";

interface HomePageProps {
  searchParams: {
    orderByCreatedAt: Order;
    orderByUpdatedAt: Order;
    page: number;
    limit: number;
  };
}

export default async function Home({ searchParams }: HomePageProps) {
  const query = objectToQueryString(searchParams);
  const articles = await findArtilcesService(query);

  return (
    <main className="container py-8 flex flex-col gap-4 flex-1">
      <section className="flex flex-col gap-4">
        {articles.data.map((e) => (
          <ArticleCard {...e} key={e._id} />
        ))}
      </section>
      <Pagination
        currentPage={articles.currentPage}
        totalPages={articles.totalPages}
        leftFromCurrent={2}
        rightFromCurrent={2}
      />
    </main>
  );
}
