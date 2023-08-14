import { ArticleResponse } from "@/services/article/types";
import styles from "./ArticleCard.module.scss";
import Link from "next/link";
import { ImagesEnum } from "@/common/constants";
import Image from "next/image";
import { dateTimeFormater } from "@/utils/dateTimeFormater";

export const ArticleCardComponent: React.FC<ArticleResponse> = (props) => {
  return (
    <article className={styles.container}>
      <Link
        href={`/${props.author.username}`}
        className={styles.author}
        aria-label="user page"
        title={`${props.author.username}`}
      >
        <Image
          src={props.author.avatarUrl || ImagesEnum.user}
          alt="author_icon"
          width={32}
          height={32}
          priority
        />
        <h3>{props.author.username}</h3>
      </Link>

      <Link
        href={`/${props.author.username}/${props._id}`}
        className={styles.article_content}
        aria-label="artilce page"
      >
        <h2>{props.title}</h2>
        <div>{props.content.slice(0, 350)}</div>
      </Link>
      <div className={styles.article_times}>{`Published in: ${dateTimeFormater(
        new Date(props.createdAt)
      )}`}</div>
      <hr className={styles.hr} />
    </article>
  );
};

export default ArticleCardComponent;
