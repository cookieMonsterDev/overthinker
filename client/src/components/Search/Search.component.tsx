"use client";
import { useCallback, useEffect, useState } from "react";
import { SearchProps } from "./Search.types";
import styles from "./Search.module.scss";
import { SvgIcon } from "../SvgIcon";
import { IconsEnum } from "@/common/constants";
import { SearchResults } from "./SearchResults/SearchResults";
import { useDebounce } from "@/hooks/useDebounce";
import { SearchResponse } from "@/services/search/types";
import { searchService } from "@/services/search";

export const SearchComponent: React.FC<SearchProps> = () => {
  const [inputValue, setInputValue] = useState("");
  const [res, setRes] = useState<SearchResponse | null>(null);
  const debouncedInputValue = useDebounce(inputValue, 300);

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
    setRes(null);
  }, []);

  useEffect(() => {
    handleSearch();
  }, [debouncedInputValue]);

  return (
    <div className={styles.container}>
      <SvgIcon src={IconsEnum.search} size={25} />
      <input
        className={styles.input}
        placeholder="Search"
        onChange={(e) => setInputValue(e.target.value)}
      />
      {res && <SearchResults {...res} click={handleClick} />}
    </div>
  );
};

export default SearchComponent;
