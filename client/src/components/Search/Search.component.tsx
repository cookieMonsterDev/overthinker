"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { SearchProps } from "./Search.types";
import styles from "./Search.module.scss";
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
    <div className={styles.container} ref={ref}>
      <SvgIcon src={IconsEnum.search} size={25} />
      <input
        className={styles.input}
        placeholder="Search"
        onChange={(e) => setInputValue(e.target.value)}
        ref={inpRef}
      />
      {res && <SearchResults {...res} click={handleClick} />}
    </div>
  );
};

export default SearchComponent;
