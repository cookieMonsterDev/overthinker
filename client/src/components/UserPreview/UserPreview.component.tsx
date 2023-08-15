import { ImagesEnum } from "@/common/constants";
import { PublicUser } from "@/services/user/types";
import styles from "./UserPreview.module.scss";
import Image from "next/image";

export const UserPreviewComponent: React.FC<PublicUser> = (props) => {
  return (
    <div className={styles.container}>
      <Image
        src={props.avatarUrl || ImagesEnum.user}
        alt="author_icon"
        width={50}
        height={50}
        priority
        className={styles.avatar}
      />
      <div className={styles.info}>
        <h3>{props.username}</h3>
        <div>
          {props.bio} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laudantium enim blanditiis perferendis, minima quidem iusto eos
          voluptatibus placeat doloremque exercitationem. Quo temporibus modi
          hic fugit incidunt impedit reprehenderit voluptas sed voluptatem
          distinctio fugiat consequatur consectetur quasi quae dolore
          consequuntur eaque amet minima tempora pariatur, harum provident et
          magni. Iste fugit maxime quod, quasi quos hic ullam rem, commodi,
          rerum voluptatem veniam. Non dicta facere enim animi soluta aliquid
          doloremque odio voluptates ipsam porro id repellendus qui, nihil nulla
          quia, voluptatum assumenda at sunt nisi quidem nostrum eos atque
          pariatur? Consequatur dolores maiores totam nulla! Facilis placeat
          esse temporibus dolorum ratione.
        </div>
      </div>
    </div>
  );
};
