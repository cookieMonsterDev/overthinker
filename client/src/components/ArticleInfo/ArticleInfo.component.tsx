import { ArticleInfoProps } from "./ArticleInfo.types";
import styles from "./ArticleInfo.module.scss";
import Image from "next/image";
import { ImagesEnum } from "@/common/constants";
import Link from "next/link";
import { dateTimeFormater } from "@/utils/dateTimeFormater";

export const ArticleInfoComponent: React.FC<ArticleInfoProps> = ({
  avatarUrl,
  username,
  createdAt,
  updatedAt,
}) => {
  return (
    <div className={styles.container}>
      <Link href={`/${username}`}>
        <Image
          src={avatarUrl || ImagesEnum.user}
          alt="author_icon"
          width={32}
          height={32}
          priority
          className={styles.avatar}
        />
      </Link>
      <div className={styles.info}>
        <Link
          href={`/${username}`}
          className={styles.username}
          aria-label={`${username} page`}
        >
          @{username}
        </Link>
        <div className={styles.date}>
          <span>
            {`Published in: ${dateTimeFormater(new Date(createdAt))}`}
          </span>
        </div>
      </div>
    </div>
  );
};
