import { ArticleInfoProps } from "./ArticleInfo.types";
import styles from "./ArticleInfo.module.scss";
import Image from "next/image";
import { ImagesEnum } from "@/common/constants";

export const ArticleInfoComponent: React.FC<ArticleInfoProps> = ({
  avatarUrl,
  username, 
  createdAt
}) => {
  return (
    <div className={styles.container}>
      <Image
        src={avatarUrl || ImagesEnum.user}
        alt="user_icon"
        width={38}
        height={38}
        priority
      
      />
    </div>
  );
};
