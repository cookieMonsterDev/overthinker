"use client";
import { useState } from "react";
import { SearchProps } from "./Search.types";
import styles from "./Search.module.scss";
import { SvgIcon } from "../SvgIcon";
import { IconsEnum } from "@/common/constants";

export const SearchComponent: React.FC<SearchProps> = () => {
  return (
    <div className={styles.container}>
      <SvgIcon src={IconsEnum.search} />
      {/* <input /> */}
    </div>
  );
};

export default SearchComponent;
