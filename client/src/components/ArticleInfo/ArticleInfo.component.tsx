import { ArticleInfoProps } from "./ArticleInfo.types";
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
    <div className="flex py-[0.7rem] px-2">
      <Link href={`/${username}`}>
        <Image
          src={avatarUrl || ImagesEnum.user}
          alt="author_icon"
          width={32}
          height={32}
          priority
          className="w-14 h-14 rounded-full border border-border"
        />
      </Link>
      <div className="ml-4 flex justify-center flex-col gap-[0.3rem] overflow-auto">
        <Link
          href={`/${username}`}
          className="font-bold inline-size-full-overflow-wrap-break duration-300 hover:underline"
          aria-label={`${username} page`}
        >
          @{username}
        </Link>
        <div className="text-sm font-normal text-light_primary">
          <span>
            {`Published in: ${dateTimeFormater(new Date(createdAt))}`}
          </span>
        </div>
      </div>
    </div>
  );
};
