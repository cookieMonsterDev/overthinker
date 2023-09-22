import React from "react";
import { SearchResponse } from "@/services/search/types";
import Link from "next/link";
import { IconsEnum, ImagesEnum } from "@/common/constants";
import Image from "next/image";
import { SvgIcon } from "@/components/SvgIcon";

export const SearchResults: React.FC<
  SearchResponse & { click?: (e: any) => void }
> = ({ users, articles, click }) => {
  if (users.length === 0 && articles.length === 0) {
    return (
      <div className="z-30 absolute left-8 top-[110%] w-80 p-4 bg-secondary shadow-sm">
        Nothing similar found!
      </div>
    );
  }

  return (
    <div className="z-30 absolute left-8 top-[110%] w-80 p-4 bg-secondary shadow-sm">
      {users.length > 0 && (
        <section>
          <h2 className="w-full font-light text-light_primary">PEOPLE</h2>
          <hr className="my-[0.3rem] w-full h-[1px] bg-ultra_light_primary" />
          <div className="pt-2 pb-6 flex flex-col gap-4">
            {users.map((e) => (
              <Link
                key={e._id}
                href={`/${e.username}`}
                className="flex items-center gap-4"
                onClick={click}
              >
                <Image
                  src={e.avatarUrl || ImagesEnum.user}
                  alt="author_icon"
                  width={32}
                  height={32}
                  priority
                  className="rounded-full border border-border"
                />
                <div className="max-w-full block overflow-hidden text-ellipsis">
                  {e.username}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
      {articles.length > 0 && (
        <section>
          <h2 className="w-full font-light text-light_primary">ARTICLES</h2>
          <hr className="my-[0.3rem] w-full h-[1px] bg-ultra_light_primary" />
          <div className="pt-2 pb-6 flex flex-col gap-4">
            {articles.map((e) => (
              <Link
                key={e._id}
                href={`/${e.author.username}/${e._id}`}
                className="flex items-center gap-4"
                onClick={click}
              >
                <SvgIcon src={IconsEnum.article} />
                <div className="max-w-full block overflow-hidden text-ellipsis">
                  {e.title}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
