import { ImagesEnum } from "@/common/constants";
import { PublicUser } from "@/services/user/types";

import Image from "next/image";

export const UserPreviewComponent: React.FC<PublicUser> = (props) => {
  return (
    <div className="max-w-full flex gap-4">
      <Image
        src={props.avatarUrl || ImagesEnum.user}
        alt="author_icon"
        width={50}
        height={50}
        priority
        className="w-28 h-28 rounded-full border border-border"
      />
      <div className="p-4 flex flex-col overflow-auto gap-4">
        <h3 className="text-4xl inline-size-full-overflow-wrap-break">
          {props.username}
        </h3>
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
