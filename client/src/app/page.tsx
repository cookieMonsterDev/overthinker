import { findArtilcesService } from "@/services";
import { Order } from "@/types/order.type";
import { objectToQueryString } from "@/utils/objectToQueryString";
import Link from "next/link";
import styles from "./home.module.scss";

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

  const paginationPages = Array.from(
    { length: articles.totalPages },
    (_, i) => i + 1
  );

    console.log(paginationPages)

  return (
    <main>
      <h1></h1>
      {/* <div>{JSON.stringify(articles)}</div> */}
      <section className={styles.pagination_container}>
        <span>{`Page ${articles.currentPage} of ${articles.totalPages}`}</span>
        {articles.currentPage !== 1 && (
          <>
            <Link href={{ pathname: "/", query: { page: "1" } }}>First</Link>
            <Link
              href={{
                pathname: "/",
                query: { page: articles.currentPage - 1 },
              }}
            >
              prev
            </Link>
          </>
        )}
        {}
        {articles.currentPage !== articles.totalPages && (
          <>
            <Link
              href={{
                pathname: "/",
                query: { page: articles.currentPage + 1 },
              }}
            >
              next
            </Link>
            <Link
              href={{ pathname: "/", query: { page: articles.totalPages } }}
            >
              last
            </Link>
          </>
        )}
      </section>
    </main>
  );
}
