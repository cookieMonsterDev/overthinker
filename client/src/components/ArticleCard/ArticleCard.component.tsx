import { ArticleResponse } from "@/services/article/types";
import Link from "next/link";
import { ImagesEnum } from "@/common/constants";
import Image from "next/image";
import { dateTimeFormater } from "@/utils/dateTimeFormater";

export const ArticleCardComponent: React.FC<ArticleResponse> = (props) => {
  return (
    <article className="w-full flex flex-col">
      <Link
        href={`/${props.author.username}`}
        className="flex items-center mb-2"
        aria-label="user page"
        title={`${props.author.username}`}
      >
        <Image
          src={props.author.avatarUrl || ImagesEnum.user}
          alt="author_icon"
          width={32}
          height={32}
          priority
          className="w-8 h-8 rounded-full border border-border"
        />
        <h3 className="ml-[0.6rem] text-lg font-medium max-w-full block overflow-hidden text-ellipsis">
          {props.author.username}
        </h3>
      </Link>

      <Link
        href={`/${props.author.username}/${props._id}`}
        className="w-full flex flex-col gap-4 py-4"
        aria-label="artilce page"
      >
        <h2 className="max-w-full block overflow-hidden text-ellipsis">
          {props.title}
        </h2>
        <div className="inline-size-full-overflow-wrap-break">
          {props.content.slice(0, 350)}
        </div>
      </Link>
      <div className="text-[0.8rem]">{`Published in: ${dateTimeFormater(
        new Date(props.createdAt)
      )}`}</div>
      <hr className="my-[0.3rem] w-full h-[1px] bg-ultra_light_primary" />
    </article>
  );
};

export default ArticleCardComponent;
