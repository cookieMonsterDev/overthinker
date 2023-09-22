"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { SearchProps } from "./Search.types";
import { SvgIcon } from "../SvgIcon";
import { IconsEnum } from "@/common/constants";
import { SearchResults } from "./SearchResults/SearchResults";
import { useDebounce } from "@/hooks/useDebounce";
import { SearchResponse } from "@/services/search/types";
import { searchService } from "@/services/search";
import useOnClickOutside from "@/hooks/useOnClickOutside";

export const SearchComponent: React.FC<SearchProps> = () => {
  const [inputValue, setInputValue] = useState("");
  const [res, setRes] = useState<SearchResponse | null>(null);
  const debouncedInputValue = useDebounce(inputValue, 300);
  const inpRef = useRef<HTMLInputElement>(null);
  const ref = useRef(null);

  const handleSearch = async () => {
    try {
      if (!debouncedInputValue) return;

      const data = await searchService(debouncedInputValue);

      setRes(data);
    } catch (e) {
      setRes(null);
    }
  };

  const handleClick = useCallback(() => {
    if (inpRef.current) {
      setInputValue("");
      inpRef.current.value = "";
    }
    setRes(null);
  }, []);

  useOnClickOutside({ ref, handler: () => setRes(null) });

  useEffect(() => {
    handleSearch();
  }, [debouncedInputValue]);

  return (
    <div
      className="flex relative items-center bg-[#f9f9f9] px-2 rounded-[5rem]"
      ref={ref}
    >
      <SvgIcon src={IconsEnum.search} size={25} className="stroke-border" />
      <input
        className="bg-transparent py-[0.6rem] pr-5 pl-4 border-none outline-none"
        placeholder="Search"
        onChange={(e) => setInputValue(e.target.value)}
        ref={inpRef}
      />
      {res && <SearchResults {...res} click={handleClick} />}
    </div>
  );
};

export default SearchComponent;
