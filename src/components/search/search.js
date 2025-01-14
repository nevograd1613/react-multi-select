import React from "react";
import Icon from "@material-ui/core/Icon";
import { MdSearch } from "react-icons/md";
import PropTypes from "prop-types";

import * as styles from "./search.scss";

const Search = ({ searchPlaceholder, searchIcon, onChange }) => {
  const IconRenderer = searchIcon;
  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.input}
        placeholder={searchPlaceholder}
        onChange={onChange}
      />
      <div className={styles.icon}>
        <IconRenderer />
      </div>
    </div>
  );
};

export const SearchWithValue = ({
  searchPlaceholder,
  onChange,
  value,
  searchIcon,
}) => {
  const IconRenderer = searchIcon;

  return (
    <div className={styles.search}>
      <input
        value={value}
        type="text"
        className={styles.input}
        placeholder={searchPlaceholder}
        onChange={onChange}
      />
      <div className={styles.icon}>
        <IconRenderer />
      </div>
    </div>
  );
};

Search.propTypes = {
  searchPlaceholder: PropTypes.string,
  searchIcon: PropTypes.any,
  onChange: PropTypes.func,
};

Search.defaultProps = {
  searchPlaceholder: "Search...",
  searchIcon: MdSearch,
};

export default Search;
