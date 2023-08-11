import React from "react";
import styles from "./SearchResults.module.scss";
import { SearchResponse } from "@/services/search/types";
import Link from "next/link";
import { IconsEnum, ImagesEnum } from "@/common/constants";
import Image from "next/image";
import { SvgIcon } from "@/components/SvgIcon";

export const SearchResults: React.FC<SearchResponse & {click?: (e: any) => void}> = ({
  users,
  articles,
  click
}) => {
  if (users.length === 0 && articles.length === 0) {
    return <div className={styles.container}>Nothing similar found!</div>;
  }

  return (
    <div className={styles.container}>
      {users.length > 0 && (
        <section>
          <h2 className={styles.title}>PEOPLE</h2>
          <hr className={styles.hr} />
          <div className={styles.data}>
            {users.map((e) => (
              <Link key={e._id} href={`/${e.username}`} className={styles.link} onClick={click}>
                <Image
                  src={e.avatarUrl || ImagesEnum.user}
                  alt="author_icon"
                  width={32}
                  height={32}
                  priority
                  className={styles.avatar}
                />
                <div className={styles.text}>{e.username}</div>
              </Link>
            ))}
          </div>
        </section>
      )}
      {articles.length > 0 && (
        <section>
          <h2 className={styles.title}>ARTICLES</h2>
          <hr className={styles.hr} />
          <div className={styles.data}>
            {articles.map((e) => (
              <Link
                key={e._id}
                href={`/${e.author.username}/${e._id}`}
                className={styles.link}
                onClick={click}
              >
                <SvgIcon src={IconsEnum.article} />
                <div className={styles.text}>{e.title}</div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
