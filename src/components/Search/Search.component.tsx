"use client";
import { useState } from "react";
import { SearchProps } from "./Search.types";
import styles from "./Search.module.scss";
import { IconsEnum, SvgIcon } from "../SvgIcon";

export const SearchComponent: React.FC<SearchProps> = () => {
  return (
    <div className={styles.container}>
      <SvgIcon src={IconsEnum.search} alt="search icon"/>
      {/* <input /> */}
    </div>
  );
};

export default SearchComponent;
