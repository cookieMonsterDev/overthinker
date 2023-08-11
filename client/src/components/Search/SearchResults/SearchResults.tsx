import React from "react";
import styles from "./SearchResults.module.scss";
import { SearchResponse } from "@/services/search/types";
import Link from "next/link";

export const SearchResults: React.FC<
  SearchResponse & { click: (e: any) => void }
> = ({ users, articles, click}) => {
  if (users.length === 0 && articles.length === 0) {
    return <div className={styles.container}>Nothing similar found!</div>;
  }

  return (
    <div className={styles.container}>
      <section>
        <h2 className={styles.title}>PEOPLE</h2>
        {users.map((e) => (
          <Link key={e._id} href={`/${e.username}`} onClick={click}>
            <div>{e.username}</div>
          </Link>
        ))}
      </section>
      <section>
        <h2>ARTICLES</h2>
        {articles.map((e) => (
          <Link key={e._id} href={`/${e.author.username}/${e._id}`} onClick={click}>
            <div>{e.title}</div>
          </Link>
        ))}
      </section>
    </div>
  );
};
